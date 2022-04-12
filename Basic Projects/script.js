function AssignmentOne() {
  let country = "Australia";
  let continent = "Oceania";
  let population = 25.5;
  console.log(country, continent, population);
}

function AssignmentTwo() {
  let country = "Australia";
  let continent = "Oceania";
  let population = 25.5;
  let isIsland = true;
  let language;
  console.log(
    typeof country,
    typeof continent,
    typeof population,
    typeof isIsland,
    typeof language
  );
}

function AssignmentThree() {
  const country = "Australia";
  const continent = "Oceania";
  let population = 25.5;
  const isIsland = true;
  const language = "English";
  console.log(
    typeof country,
    typeof continent,
    typeof population,
    typeof isIsland,
    typeof language
  );
}

function AssignmentFour() {
  const country = "Australia";
  const continent = "Oceania";
  let population = 25.5;
  const isIsland = true;
  const language = "English";

  let split = population / 2;
  split++;
  let moreThanFinland = population > 6;
  let moreThanAverage = population > 33;

  let description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language +
    ".";
  console.log(description);
}
