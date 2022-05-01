import "../Assets/styles/dashboard.css";
import { DashNavigator, DashStudentHello } from "../RoutesSubComponents/dashboard";
export const Dashboard = () => {
    const msg = 'Voila Voili voilo'
    return <div className="dashboard">

        <DashStudentHello />
        <DashNavigator />
    </div>
}
export default Dashboard;