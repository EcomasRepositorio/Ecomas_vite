import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Footer from "./navigations/Footer";
import Header from "./navigations/Header";
import useFetch from "../components/useFetch";

const Eventos = () => {
  const [shownFormId, setShownFormId] = useState(null);
  const [cardContainerVisible, setCardContainerVisible] = useState(true);
  const [iframeLink, setIframeLink] = useState("");
  const { data: formData, loading } = useFetch(
    "https://ecomas.pe:4000/server/forms"
  ) || { results: [] };
  const { formId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (formId && formData !== null) {
      // Agregamos una comprobación aquí
      const selectedForm = formData.results.find(
        (item) => item.id === Number(formId)
      );

      if (selectedForm) {
        setShownFormId(selectedForm.id);
        setCardContainerVisible(false);
        setIframeLink(selectedForm.link + "?embedded=true");
      }
    }
  }, [formId, formData]);

  const handleLinkClick = (id) => {
    const selectedForm = formData.results.find((item) => item.id === id);

    if (selectedForm) {
      setShownFormId(id);
      setCardContainerVisible(false);
      const normalizedLink = selectedForm.link + "?embedded=true";
      navigate(`/Eventos/${id}`);
      setIframeLink(normalizedLink);
    }
  };

  const handleCloseIframe = () => {
    setShownFormId(null);
    setCardContainerVisible(true);
    setIframeLink("");
  };
  return (
    <div>
      <Header />
      <div className="mb-5" style={{ height: "50px" }}></div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          formData.results.map((item) => (
            <div
              key={item.id}
              className={`card shadow p-3 mb-5 bg-white rounded ${
                cardContainerVisible ? "" : "d-none"
              }`}
            >
              <div className="p-3">
                <img
                  className="card-img-top rounded"
                  src={`https://ecomas.pe:4000/server/img/${item.banner}`}
                  alt="Card image cap"
                />
              </div>
              <div className="mx-3 text-right">
                <a
                  href="#"
                  className="text-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  Ver Más{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle-fill mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))
        )}

        {shownFormId !== null && (
          <div>
            <iframe
              title="Formulario"
              src={iframeLink}
              width="100%"
              height="1000px"
              frameBorder="0"
            />
            <button
              className="btn btn-secondary m-3"
              onClick={handleCloseIframe}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Eventos;
