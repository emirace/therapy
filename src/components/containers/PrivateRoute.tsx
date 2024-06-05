import React from "react";
import { Navigate, useLocation } from "react-router-native";
import { useAuth } from "../../context/Auth";

interface PrivateRouteInterface {
  groupId?: number;
  access?: string;
  userType?: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({
  component: Component,
}) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Component />;
};

export default PrivateRoute;
