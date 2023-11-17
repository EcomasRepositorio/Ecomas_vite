import React, { useState, useEffect } from "react";
import { Row, Col, Card, Carousel, Button, Container } from "react-bootstrap";

const Cursos = () => {
  const [cursosGrupos, setCursosGrupos] = useState([]);
  const [cursosPorGrupo, setCursosPorGrupo] = useState(4);

  const cursos = [
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
    {
      id: 2,
      titulo: "Curso 2",
      descripcion: "Descripción del curso 2",
      imagenUrl: "assets/images/courses/pic1.jpg",
    },
  ];

  useEffect(() => {
    const grupos = [];
    let cursosCopy = [...cursos];

    while (cursosCopy.length) {
      grupos.push(cursosCopy.splice(0, cursosPorGrupo));
    }

    setCursosGrupos(grupos);
  }, [cursosPorGrupo]);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 600) {
        setCursosPorGrupo(1);
      } else if (width < 1000) {
        setCursosPorGrupo(2);
      } else {
        setCursosPorGrupo(4);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container className="my-4">
        <Carousel controls indicators={false} prevLabel="" nextLabel="">
          {cursosGrupos.map((grupo, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {grupo.map((curso) => (
                  <Col key={curso.id} xs={12} sm={6} md={4} lg={3}>
                    <Card className="m-3 shadow p-3 mb-5 bg-white rounded">
                      <Card.Img variant="top" src={curso.imagenUrl} />
                      <Card.Body className="text-center">
                        <Card.Title>{curso.titulo}</Card.Title>
                        <Card.Text>{curso.descripcion}</Card.Text>
                        <Button variant="secondary m-2">adquirir</Button>
                        <Button variant="secondary m-2">ver mas</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Cursos;
