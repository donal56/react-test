import React from "react";
import {Calendar} from "react-calendar";
import {Header, Menu} from "semantic-ui-react";

export default function EventFilters() {
    return (
        <>
            <Menu vertical size="large" style={{width: "100%"}}>
                <Header
                    icon="filter"
                    attached
                    color="teal"
                    content="Filtros"></Header>
                <Menu.Item content="Todos los eventos"></Menu.Item>
                <Menu.Item content="Asistire"></Menu.Item>
                <Menu.Item content="Estoy organizando"></Menu.Item>
            </Menu>
            <Menu vertical size="large" style={{width: "100%"}}>
                <Header
                    icon="calendar"
                    attached
                    color="teal"
                    content="Seleccionar fecha"></Header>
                <div style={{paddingTop: 20, paddingLeft: 25, paddingBottom: 20}}>
                    <Calendar></Calendar>
                </div>
            </Menu>
        </>
    );
}
