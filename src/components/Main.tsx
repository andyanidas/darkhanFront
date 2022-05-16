import React, { useEffect, useState } from "react";
import "../style/main.css";

import { useFetch } from "../customHooks/useFetch";
import { Container } from "react-bootstrap";
import { useContent } from "../contexts/Content";
import { Content } from "../types";
import {
  PartOne,
  PartTwo,
  PartThree,
  PartFour,
  PartFive,
} from "./subComponents";
import Loading from "./Loading";
import Social from "./subComponents/Social";

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
    <div className="main">
      <PartOne />
      <Container>
        <PartTwo part1={part1} />
      </Container>
      <Container>
        <div className="part-one">
          <PartThree />
        </div>
        <PartFour part2={part2} />
        <PartFive data={data.data} />
        {/* <Test>{}</Test> */}
        <Social />
        <div className="part-four">
          <div className="texts">
            <h2>Mobile Applications</h2>
            <p>
              To create a fast and smooth app for any platform, we also deliver
              products with outsourcing app development model. This model gives
              a reasonable solution to control the budget and other recourses.{" "}
            </p>
            <p>
              Our team connects conventional essential technologies and
              architecture with the unique logic of the app. Combined with a
              polished design and UI/UX an app becomes the one that reaches
              goals of our customers and wins the hearts of users.
            </p>
            <button>Get the app price &#8594;</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
