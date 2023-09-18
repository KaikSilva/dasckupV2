import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo_favicon.png";

function Header(){
    return (
        <div className="app-sidebar">
        <div  className="logo">
            <a style={{backgroundImage:`url(${logo})`}} href="https://dasckup.com" className="logo-icon"><span className="logo-text">Dasckup</span></a>
            <div className="sidebar-user-switcher user-activity-online">
                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/83962112?s=400&u=68b89e941219b3d68dc9c51c0c221ee0bfb85905&v=4"/>
                    <span className="activity-indicator"></span>
                    <span className="user-info-text">Chloe<br/><span className="user-state-info">On a call</span></span>
                </a>
            </div>
        </div>
        <div className="app-menu">
            <ul className="accordion-menu">
                <li className="active-page">
                    <a href="index.html" className="active"><i className="material-icons-two-tone">home</i> Painel</a>
                </li>
                <li className="sidebar-title">
                    Clientes & Leads
                </li>
                
                <li>
                    <a href=""><i className="material-icons-two-tone">face</i>Clientes <i className="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/clients">Todos</Link>
                        </li>
                        <li>
                            <Link to="/clients/new">Criar novo</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href=""><i className="material-icons-two-tone">space_dashboard</i>Leads <i className="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                    <ul className="sub-menu">
                        <li>
                            <a href="pricing.html">Todos</a>
                        </li>
                        <li>
                            <a href="invoice.html">Criar novo</a>
                        </li>
                    </ul>
                </li>


                <li className="sidebar-title">
                    Vendas
                </li>

                <li>
                    <a href="#"><i className="material-icons-two-tone">paid</i>Pedidos<i className="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/orders">Todos</Link>
                        </li>
                        <li>
                            <Link to="/orders/new">Criar novo</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="material-icons-two-tone">local_mall</i>Produtos<i className="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/products">Todos</Link>
                        </li>
                        <li>
                            <Link to="/products/new">Criar novo</Link>
                        </li>
                    </ul>
                </li>

                <li className="sidebar-title">
                    Usuários
                </li>
                <li>
                    <a href="#"><i className="material-icons-two-tone">manage_accounts</i>Usuários<i className="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/users">Todos</Link>
                        </li>
                        <li>
                            <Link to="/users/new">Criar novo</Link>
                        </li>
                    </ul>
                </li>

                <li className="sidebar-title">
                    Sistema
                </li>
                <li >
                    <a href="index.html"><i className="material-icons-two-tone">calendar_today</i> Calendário</a>
                </li>
                <li >
                    <a href="index.html" ><i className="material-icons-two-tone">build</i> Configurações</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Header;