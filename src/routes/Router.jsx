import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Ambil nama repo dari env, default ""
const repoName = import.meta.env.VITE_REPO_NAME || "";

// Buat router
export const router = createBrowserRouter(
  [
    {
      path: "/", // path utama parent
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          index: true, // index route otomatis cocok dengan parent `/`
          element: <Home />,
        },
        // Tambahkan rute lain di sini jika perlu
        // {
        //   path: "about",
        //   element: <About />,
        // },
      ],
    },
  ],
  {
    basename: `/${repoName}`, // basename dinamis, misal "/picto"
  }
);
