import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/public/Home";
import PublicRouter from "./routes/PublicRouter";
import Tourpackages from "../page/public/Tourpackages";
import OurServices from "../page/public/OurServices";
import Contactus from "../page/public/Contactus";
import Gallery from "../page/public/Gallery";
import Blogs from "../page/public/Blogs";
import PageNotFound from "../page/public/PageNotFound";
import SinglePageBlog from "../page/public/SinglePageBlog";
import InternationalTours from "../page/public/InternationalTours";
import DomesticTours from "../page/public/DomesticTours";
import SpritualTours from "../page/public/SpritualTours";
import Faq from "../page/public/Faq";
import Feedback from "../page/public/Feedback";
import AboutUs from "../page/public/AboutUs";
import TourPackBooking from "../page/public/TourPackBooking";
import HotelBooking from "../page/public/HotelBooking";
import TransportBooking from "../page/public/TransportBooking";
import B2BDeals from "../page/public/B2BDeals";
import PayNow from "../page/public/PayNow";
import Activity from "../page/public/Activity";
import ActivityDetails from "../page/public/ActivityDetails";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <PublicRouter />, // Make sure PublicRouter is imported
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },

      {
        path: "/tourpackages",
        element: <Tourpackages />,
      },
     
     
      {
        path: "/ourservices",
        element: <OurServices />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      
      {
        path:"/singleblog/:id",
        element: <SinglePageBlog />,
      },
      {
        path:"/activity/:id",
        element: <ActivityDetails />,
      },

      {
        path:"/pagenotfound",
        element: <PageNotFound />,
      },
      {
        path:"/faqs",
        element: <Faq />,
      },
      {
        path:"/feedback",
        element: <Feedback />,
      },
      {
        path:"/aboutus",
        element: <AboutUs />,
      },
      {
        path:"/paynow",
        element: <PayNow />,
      },
      
     
     
      {
        path: "/tourpackages/internationaltours",
        element: <InternationalTours />,
      },
      {
        path: "/tourpackages/domestictours",
        element: <DomesticTours />,
      },
      {
        path: "/tourpackages/spritualtours",
        element: <SpritualTours />,
      },
      {
        path: "/ourservices/tourpackbooking",
        element: <TourPackBooking />,
      },
      {
        path: "/ourservices/hotelbooking",
        element: <HotelBooking />,
      },
      {
        path: "/ourservices/transportbooking",
        element: <TransportBooking />,
      },
      {
        path: "/ourservices/b2bdeals",
        element: <B2BDeals />,
      },
      
      
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={routers} />;
}
