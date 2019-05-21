import { TestBed, getTestBed, inject, flush } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('MoviesService', () => {

  let  injector: TestBed;
  let  movieService: MoviesService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MoviesService]
    });

    const testBed = getTestBed();
    movieService = testBed.get(MoviesService);
    httpMock = testBed.get(HttpTestingController);
  });

  it('it should return all movies', () => {
      const dummyData = [
        { DVD: '22 Aug 2017',
        Released: '05 May 2017',
        actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
        awards: 'Nominated for 1 Oscar. Another 12 wins & 42 nominations.',
        boxOffice: '$389,804,217',
        country: 'USA',
        director: 'James Gunn',
        dvd: '2017-08-22T00:00:00.000+0000',
        genre: 'Action, Adventure, Comedy, Sci-Fi',
        imdbRating: '7.7',
        imdbVotes: '449,175',
        imdbid: 'tt3896198',
        language: 'English',
        metascore: '67',
        movieId: 1,
// tslint:disable-next-line: max-line-length
        plot: 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
        production: 'Walt Disney Pictures',
        rated: 'PG-13',
        released: '2017-05-05T00:00:00.000+0000',
        response: 'True',
        runtime: '136 min',
        title: 'Guardians of the Galaxy Vol. 2',
        type: 'movie',
        website: 'https://marvel.com/guardians',
// tslint:disable-next-line: max-line-length
        writer: 'James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)',
        year: null,
        },
        {DVD: '25 May 1977',
        Released: '21 Sep 2004',
        actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
        boxOffice: 'N/A',
        country: 'USA',
        director: 'George Lucas',
        dvd: '1977-05-25T00:00:00.000+0000',
        genre: 'Action, Adventure, Fantasy, Sci-Fi',
        imdbRating: '8.6',
        imdbVotes: '1,104,701',
        imdbid: 'tt0076759',
        language: 'English',
        metascore: '90',
        movieId: 2,
// tslint:disable-next-line: max-line-length
        plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
// tslint:disable-next-line: max-line-length
        poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        production: '20th Century Fox',
        rated: 'PG',
        released: '2004-09-21T00:00:00.000+0000',
        response: 'True',
        runtime: '121 min',
        title: 'Star Wars: Episode IV - A New Hope',
        type: 'movie',
        website: 'http://www.starwars.com/episode-iv/',
        writer: 'George Lucas',
        year: null,
      }

      ];
      // We call the service
      movieService.getAllMovies().subscribe(fakeResponse => {
        expect(fakeResponse[0].type).toEqual('movie');
        expect(fakeResponse.length).toEqual(2);

      });
      const req = httpMock.expectOne('https://boiling-ocean-39055.herokuapp.com/allmovies');
      expect(req.request.method).toEqual('GET');

      req.flush(dummyData);
      httpMock.verify();
    });

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
