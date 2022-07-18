import React, { useEffect, useState } from "react";
import "../style/main.css";

import { useFetch } from "../customHooks/useFetch";
import { Container } from "react-bootstrap";
import { useContent } from "../contexts/Content";
import { Content } from "../types";
import {
  CarouselPart,
  PartTwo,
  PartThree,
  PartFour,
  PartFive,
  MajorSection,
} from "./subComponents";
import Loading from "./Loading";
import Social from "./subComponents/Social";
import SchoolInfo from "./subComponents/SchoolInfo";
import Map from "./subComponents/Map";

export default function Main() {
  const { loading, error, data } = useFetch("posts");
  const [part1, setPart1] = useState<Content | undefined>();
  const [part2, setPart2] = useState<Content[] | undefined>();
  const contents = useContent();
  useEffect(() => {
    setPart1(contents?.find((content) => content.id === 1));
    setPart2(
      contents?.filter(
        (content) =>
          content.attributes.title === "1/3" ||
          content.attributes.title === "2/3" ||
          content.attributes.title === "3/3"
      )
    );
  }, [contents]);

  if (loading) return <Loading />;
  // if (loading) return <Spinner animation="border" />;
  if (error) return <>Error</>;
  return (
    <div className="ain">
      <CarouselPart />
      <Container>
        <PartTwo part1={part1} />
      </Container>
      <Container>
        <div className="part-one">
          <PartThree />
        </div>
        <MajorSection />
        <PartFour part2={part2} />
        <PartFive data={data.data} />
        <SchoolInfo />

        <Social />
        <Container className="part-four">
          <div className="row inline-block">
            <div className="col-6 text-start mt-auto mb-auto">
              <h2>ХОЛБОО БАРИХ</h2>
              <p>
                Сургалтын талаар дэлгэрэнгүй мэдээлэл авах бол та манай оффис
                дээр ирж уулзах эсвэл манай дугаарт холбогдоно уу.
              </p>

              <div
                style={{
                  textAlign: "center",
                  paddingTop: "auto",
                  paddingBottom: "auto",

                  color: "white",
                  backgroundColor: "rgba(55, 51, 113, 1",
                  width: "270px",
                  height: "60px",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "3px 3px 10px white  ",
                }}
              >
                <a
                  href="tel:8665562570"
                  style={{
                    textDecoration: "none",
                    display: "inline-block",
                    color: "white",
                    fontSize: "1.5rem",
                    marginTop: "15px",
                    marginBottom: "auto",
                  }}
                >
                  ЗАЛГАХ 866-556-2570
                </a>
              </div>
            </div>

            <div className="col-6">
              <img
                src="/pictures/location.png"
                alt=""
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </div>
          </div>
          <div className="row"></div>
        </Container>
      </Container>
      <Map />
    </div>
  );
}
