import React, { useState } from "react";
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminDashboard() {
  const [user, setUser] = useState({
    username: "Nom de l'Utilisateur",
  });

  const data = [
    {
      date: "2023-10-18",
      action: "Modification",
      pole: "Ressources Humaines",
      index: 1,
    },
    {
      date: "2023-10-17",
      action: "Suppression",
      pole: "Finance",
      index: 2,
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4>Bienvenue, {user.username}!</h4>
            </Card.Header>
            <Card.Body>
              <h5>Tableau de Bord Administrateur</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Action</th>
                    <th>Pôle</th>
                    <th>Index</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.action}</td>
                      <td>{item.pole}</td>
                      <td>{item.index}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
