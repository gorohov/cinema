import React from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { MainMenu } from '../Components/Menu';
import { Cinemas } from '../../Cinemas/Pages/Cinemas';

const {Header, Content, Footer, Sider} = Layout;

export class Main extends React.Component {
    state = {
        collapsed: false,
    };
    
    handleToggleSidebar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    width={270}
                >
                    <div className="logo" />
                    <MainMenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="sider-trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.handleToggleSidebar}
                        />
                    </Header>
                    <Content style={{ margin: '24px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <div style={{background: '#fff', padding: 24}}>
                            <Switch>
                                <Route exact path="/main" render={() => <h1>Главная</h1>} />
                                <Route path="/main/cinemas" component={Cinemas} />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}