import "./styles.css";
import { useState } from "react";

const bookDictionary = {
  Investing: [
    {
      name: "The Little Book of Common Sense Investing",
      description:
        "The Little Book of Common Sense Investing” provides a framework for building a low-risk portfolio and teaches you how to make the smartest investment decisions. Bogle also explains the importance of index funds and advises readers to ignore investing fads and focus instead on constructing a broad and diversified portfolio.",
      rating: "4.2/5"
    },
    {
      name: "Broke Millennial",
      description:
        "Broke Millennial,” as recommended by members of the Investopedia Financial Review Board as one of the top picks for young investors, addresses what many other investing guides fail to acknowledge: understanding personal finance.",
      rating: "3.9/5"
    },
    {
      name: "Rich Dad Poor Dad.",
      description:
        "Robert Kiyosaki wrote the book in 1997. The author has narrated his journey with his father and his friend’s father while growing up. He has imparted the learning that isn’t taught in school. The book also says that you don’t need a large investment to make money.",
      rating: "4.1/5"
    }
  ],
  "Sci-Fi": [
    {
      name: "Altered Carbon",
      description:
        "Set in a future where interstellar travel is done by “sleeving” one’s consciousness into new bodies, the story follows a private investigator whose past collides with his present as he attempts to solve a rich man’s murder. A dark and gritty cyberpunk experience.",
      rating: "4/5"
    },
    {
      name: "The Best of All Possible Worlds",
      description:
        "After their homeworld is destroyed, the surviving members of the Sadiri must find a way for their people to continue, despite the fact that most of the survivors are male. To do so, they make their way across the colony planet of Cygnus Beta under the guidance of a woman from the planet’s Central Government.",
      rating: "3.6/5"
    },
    {
      name: "The Fold",
      description:
        "When DARPA researchers stumble upon a way to fold dimensions, enabling humans to travel long distances in a matter of seconds, they’re certain their discovery will change the course of human history. But Mike Erikson isn’t so sure. The researchers who test the doorway are coming back… off.",
      rating: " 3.9/5"
    }
  ],
  Horror: [
    {
      name: "House of Leaves",
      description:
        "House of Leaves is the debut novel by American author Mark Z. Danielewski, published in March 2000 by Pantheon Books. A bestseller, it has been translated into a number of languages, and is followed by a companion piece, The Whalestoe Letters.",
      rating: "4/5"
    },
    {
      name: "The Haunting of Hill House",
      description:
        "The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson. A finalist for the National Book Award and considered one of the best literary ghost stories published during the 20th century",
      rating: "3.8/5"
    },
    {
      name: "It",
      description:
        "It is a 1986 horror novel by American author Stephen King. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
      rating: "4.2/5"
    }
  ]
};

const bookGenres = Object.keys(bookDictionary);

export default function App() {
  const [bookRecommendation, setBookRecommendation] = useState([]);

  function showBook(genre) {
    setBookRecommendation(
      bookDictionary[genre].map((book, index) => {
        return (
          <div key={index} className="book">
            <h3>{book.name}</h3>
            <p>{book.description}</p>
            <strong>Rating {book.rating}</strong>
          </div>
        );
      })
    );
  }

  return (
    <div className="App">
      <h2>Book Recommendation</h2>

      {bookGenres.map((genre) => {
        return (
          <div
            key={genre}
            className="book-genre"
            onClick={() => showBook(genre)}
          >
            {genre}
          </div>
        );
      })}
      <div class="book-container">{bookRecommendation}</div>
    </div>
  );
}
