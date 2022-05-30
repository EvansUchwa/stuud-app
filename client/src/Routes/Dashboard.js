// import "../Assets/styles/dashboard.css";
import { useSelector } from "react-redux";
import DashContributors from "../RoutesComponents/dashboard/left/contributors";
import { DashSearchAccountAndNotices } from "../RoutesComponents/dashboard/dashElementUI";
import DashHello from "../RoutesComponents/dashboard/left/hello";
import { DashLastPublications } from "../RoutesComponents/dashboard/left/lastPublications";
import DashRightProfilInfos from "../RoutesComponents/dashboard/right/profilInfos";
import DashStats from "../RoutesComponents/dashboard/stats";
import { authSelector } from "../Store/selectors/authSelectors";
export const Dashboard = () => {
    const msg = 'Voila Voili voilo'
    const auth = useSelector(authSelector);
    return <div className="dashboard">
        <DashSearchAccountAndNotices props={{
            targetSearch: "home",
        }} />
        <h1>Dashboard</h1>
        <section className="dashLeft">
            <DashHello props={{ auth }} />
            {/* <DashStats /> */}
            <DashLastPublications props={{ type: "course" }} />
            <DashLastPublications props={{ type: "course-request" }} />

            <DashContributors />
        </section>
        <section className="dashRight">
            <DashRightProfilInfos props={{ auth }} />
        </section>
    </div>
}
export default Dashboard;