import ProtectedRoute from "@/modules/shared/components/routes/protected-route";
import DefaultLayout from "@/modules/shared/components/layout/default-layout";
import { RouteObject } from "react-router";
import { SocialServicesView } from "./imports";
import PATHS from "@/configs/constants/paths";

export const socialServicesVisitorRoutes: RouteObject = {
  path: PATHS.ADMIN.SOCIAL + PATHS.GENERICS.SURVEY,
  element: (
    <ProtectedRoute>
      <DefaultLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "",
      element: <SocialServicesView />,
    },
    {
      path: ":id",
      element: <div>cada encuesta</div>,
    },
  ],
};
