import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Rating,
  Text,
  Badge,
  DropdownButton,
  DropdownItem,
} from "reactstrap";

const MoviesList = ({ movies }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [page]);

  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton id="sort-movies" title="Сортувати">
            <DropdownItem eventKey="rating" href="#">Рейтинг</DropdownItem>
            <DropdownItem eventKey="popularity" href="#">Популярність</DropdownItem>
            <DropdownItem eventKey="release_date" href="#">Дата випуску</DropdownItem>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        {movies.map((movie, index) => (
          <Col key={movie.id} sm="6" md="4" lg="3">
            <Card>
              <Image src={movie.poster_path} alt={movie.title} />
              <MovieInfo movie={movie} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={(page) => setPage(page)}
          />
        </Col>
      </Row>
    </Container>
  );
};
