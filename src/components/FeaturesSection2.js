import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FeaturesSection2(props) {
  const items = [
    {
      title: "Have fun!",
      subtitle:
        "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
      iconClass: "fas fa-gem",
      iconColor: "warning",
    },
    {
      title: "Charge up",
      subtitle:
        "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
      iconClass: "fas fa-charging-station",
      iconColor: "danger",
    },
    {
      title: "Pick your flavor",
      subtitle:
        "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
      iconClass: "fas fa-adjust",
      iconColor: "primary",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} lg={4} className="px-4" key={index}>
              <div className="py-3">
                <div className={`text-${item.iconColor} display-4 mb-4`}>
                  <i className={`${item.iconClass}`} />
                </div>
                <h4 className="mb-4">{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
