import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Films from "../components/Films";
import Residents from "../components/Residents";
import NotFoundPage from "../components/NotFoundPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Planets from "../components/Planets";
import Planet from "../components/Planet";

const queryClient = new QueryClient({
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchInterval: 1000000,
  refetchOnWindowFocus: false,
  refetchIntervalInBackground: 1000000,
  staleTime: 1000 * 60 * 60 * 24 * 365,
  cacheTime: 1000 * 60 * 60 * 24 * 365,
});

const Router = () => {
  useEffect(() => {
    window.process = { ...window.process };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Planets} />
          <Route
            exact
            path="/planets"
            render={(props) => (
              <Planets
                {...props}
                headers={[
                  { name: "residents", type: "array" },
                  { name: "films", type: "array" },
                ]}
              />
            )}
          />
          <Route exact path="/planet/:id" component={Planet} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/residents" component={Residents} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
