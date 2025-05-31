import React, { useState } from "react";
import "./ActorsUI.css";

const App = () => {
  const [selectedActor, setSelectedActor] = useState(null);
  const actors = [
    {
      name: "Shah Rukh Khan",
      image:
        "https://i.pinimg.com/736x/ea/79/1c/ea791c8e68426297388503c3996c7708.jpg",
      movies: [
        {
          name: "Baazigar",
          image:
            "https://m.media-amazon.com/images/M/MV5BNzI3NTI1YjEtYTUyNy00MzUzLWJmMjktYjg2ZTM0M2RmMmNkXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Swades",
          rate: "7.1",
          image:
            "https://upload.wikimedia.org/wikipedia/en/8/85/Swades_poster.jpg",
        },
        {
          name: "Devdas",
          image:
            "https://upload.wikimedia.org/wikipedia/en/9/9a/Devdas_%282002_Hindi_film%29.jpg",
        },
        {
          name: "Jawan",
          image:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-3x4.jpg?VersionId=RGX_q3pk2AWWdkkOYhypoZSFxDHwV.vF",
        },
        {
          name: " kabhi khushi kabhi gum",
          image:
            "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kabhi-khushi-kabhi-gham-et00003004-30-08-2016-03-49-06.jpg",
        },
        {
          name: "Don",
          image:
            "https://m.media-amazon.com/images/M/MV5BYjBmOTg2NTgtZTc2Mi00ZWRhLTkzMWQtMDI0YThhZTcyMzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Baadshah",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-R7-jgJ6nLvx3Cddo4xn3kAmJ_OJzRwIbyA&s",
        },
        {
          name: "Chennai Express",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Chennai_Express.jpg/220px-Chennai_Express.jpg",
        },
        {
          name: "Chamatkar",
          image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Chamatkar.jpg",
        },
        {
          name: "Dunki",
          image:
            "https://anandkumarrsonfilms.com/wp-content/uploads/2023/12/dunki-poster.jpeg",
        },
      ],
    },
    {
      name: "Salman Khan",
      image:
        "https://images.filmibeat.com/img/popcorn/profile_photos/salman-khan-20221126110012-15.jpg",
      movies: [
        {
          name: "Bajrangi Bhaijaan",
          image:
            "https://m.media-amazon.com/images/M/MV5BYzVjMjZiNGUtZjZiNy00Yzg4LWEzYzYtMmI1NDg5NWNiNjUwXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Hum Aapke Hain Koun",
          image:
            "https://static.langimg.com/thumb/112290485/navbharat-times-112290485.jpg?imgsize=37084&width=540&resizemode=3",
        },
        {
          name: "Sultan",
          image:
            "https://img.nowrunning.com/content/movie/2016/Sultan/Stills/Sultan-Stills-23.jpg",
        },
        {
          name: "Dabangg",
          image:
            "https://images.jdmagicbox.com/comp/jd_social/news/2018jul19/image-99650-tkqnvl5aas.jpg",
        },
        {
          name: "Wanted",
          image:
            "https://m.media-amazon.com/images/M/MV5BZWZkNDM3MzctMmYzMi00MTI0LWJiNmYtZTQ5N2NmNTRjMDgyXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Tiger Zinda Hai",
          image:
            "https://static.toiimg.com/photo/msid-62206437/62206437.jpg?80401",
        },
        {
          name: "Judwaa",
          image:
            "https://m.media-amazon.com/images/M/MV5BZDM2ZDcyM2ItODdhNC00NDA4LWE3NTQtNThmNWRiOTJjMDllXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Ek Tha Tiger",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjA0YmUwMDUtMGI1Ny00MGU1LWJmODYtYmY1NzAxZmNmY2Y3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Hum Saath Saath Hain",
          image:
            "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p68519_p_v8_ac.jpg",
        },
        {
          name: "Bodyguard",
          image:
            "https://images.filmibeat.com/img/popcorn/movie_posters/bodyguard-9614.jpg",
        },
      ],
    },

    {
      name: "Amitabh Bachchan",
      image:
        "https://static.tnn.in/thumb/msid-90458704,updatedat-1715154369046,width-450,height-600,resizemode-75/90458704.jpg",
      movies: [
        {
          name: "Agneepath",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Agneepath_poster.jpg/220px-Agneepath_poster.jpg",
        },
        {
          name: "Deewaar",
          image:
            "https://m.media-amazon.com/images/I/81rzqFiVpzL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          name: "Black",
          image:
            "https://m.media-amazon.com/images/M/MV5BNTgzMTNmMDQtNWU0MS00MTFjLTk0ZWYtNGJmMWFlYTllMTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Sholay",
          image:
            "https://sausociology.files.wordpress.com/2011/09/sholay.jpg?w=300&h=400&crop=1",
        },
        {
          name: "Don",
          image:
            "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/don-et00065518-20-11-2017-07-32-18.jpg",
        },
        {
          name: "Abhimann",
          image: "https://static.toiimg.com/photo/61321115.cms",
        },
        {
          name: "Zanjeer",
          image:
            "https://m.media-amazon.com/images/I/91pTmgEQ1AL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          name: "Bhoothnath",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTUxMjc2Mzk5OF5BMl5BanBnXkFtZTgwOTg3MTA2MDE@._V1_.jpg",
        },
        {
          name: "Mohabbatein",
          image:
            "https://bollywoodmovieposters.com/wp-content/uploads/2021/02/amitabh-bachchan-old-movie-posters-mohabbatein.jpg",
        },
        {
          name: "Coolie",
          image:
            "https://upload.wikimedia.org/wikipedia/en/7/71/Coolie_%281983_Hindi_film%29.jpg",
        },
      ],
    },

    {
      name: "Govinda",
      image:
        "https://c.saavncdn.com/artists/Govinda_20191017100739_500x500.jpg",
      movies: [
        {
          name: "Ilzaam",
          image:
            "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10042326_p_v8_aa.jpg",
        },
        {
          name: "Khudgarz",
          image:
            "https://m.media-amazon.com/images/M/MV5BNmFhZGNjOWMtODhjNy00MDdhLWJiOWEtYjc1OGZiZjYwODY1XkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Mera Lahoo",
          image:
            "https://upload.wikimedia.org/wikipedia/en/1/11/Mera_Lahoo.png",
        },
        {
          name: "Coolie No.1",
          image:
            "https://images.justwatch.com/poster/241827103/s718/coolie-no-1.jpg",
        },
        {
          name: "Raja Babu",
          image:
            "https://i.scdn.co/image/ab67616d0000b273ed86d7af509afe76c31125ae",
        },
        {
          name: "Shola aur Shabnam",
          image:
            "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Shola-Aur-Shabnam-306x393.jpg",
        },
        {
          name: "Dulhe Raja",
          image:
            "https://m.media-amazon.com/images/M/MV5BNmFlYTVhYjAtNjM2Yi00MzQ5LWI2MDctZGE4MTZiYTk2NjVkXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Hatya",
          image:
            "https://m.media-amazon.com/images/M/MV5BNGU3MmM0YjgtZTE5OC00ZDcxLTg5MTMtYzI5N2JiYjMwZmUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Bade Miyan Chote Miyan",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbUGy2AAdvwGV6Ei4oKxhZglssun5S14t_w&s",
        },
        {
          name: "Hum",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdtKSqDtJAwt6es5_Lhx4NMaI12cNjSbbFg&s",
        },
      ],
    },

    {
      name: "Ranbir Kapoor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ranbir_Kapoor_promoting_Brahmastra.jpg/220px-Ranbir_Kapoor_promoting_Brahmastra.jpg",
      movies: [
        {
          name: "Barfi",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Sanju",
          image:
            "https://upload.wikimedia.org/wikipedia/en/8/85/Sanju_poster.jpg",
        },
        {
          name: "Wake up Sid",
          image:
            "https://upload.wikimedia.org/wikipedia/en/9/9f/Wake_up_Sid.jpg",
        },
        {
          name: "Rockstar",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg",
        },
        {
          name: "Tamasha",
          image:
            "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tamasha-et00025390-1676626485.jpg",
        },
        {
          name: "Raajneeti",
          image:
            "https://lh3.googleusercontent.com/proxy/RyC6nNqiUWRQFQ_15ZMkklvrsUyJhvJWzn1vR8c2dlkoyCuFo-x1lS_EjbHeUbjyanPxt7QLdFwk_15DILPR2n2jy1EqTENwrnFdFASEbjOm11dAWEPvcO8drw",
        },
        {
          name: "Jagga Jasoos",
          image:
            "https://resizing.flixster.com/1PapeYQaZy4WUj3pCVDVjic9IFY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0NzgzYzgxLTJiMzctNDM5Mi1hYmNjLTJmY2ZhMWEzNzMyZi53ZWJw",
        },
        {
          name: "Ajab prem ki ghazab Kahani",
          image:
            "https://upload.wikimedia.org/wikipedia/en/6/67/Ajab_Prem_Ki_Ghazab_Kahani.jpg",
        },
        {
          name: "Animal",
          image:
            "https://m.media-amazon.com/images/M/MV5BZThmNDg1NjUtNWJhMC00YjA3LWJiMjItNmM4ZDQ5ZGZiN2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Brahmastra",
          image:
            "https://m.media-amazon.com/images/M/MV5BMDIxMWZjODAtNmRjOC00OGExLWJjZTAtMmQ1MzRmYjhlNjk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
      ],
    },

    {
      name: "Akshay Kumar",
      image:
        "https://i.pinimg.com/originals/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
      movies: [
        {
          name: "Hera Pheri",
          image:
            "https://bollywoodmovieposters.com/wp-content/uploads/2023/09/phir-hera-pheri-movie-poster-old-bollywood.jpg",
        },
        {
          name: "Airlift",
          image:
            "https://upload.wikimedia.org/wikipedia/en/3/35/Airlift_poster.jpg",
        },
        {
          name: "Pad Man",
          image:
            "https://m.media-amazon.com/images/M/MV5BYzdlMzQxNTAtOTlhZC00MDJjLTg3YzEtMjIxYTE2MmI2YTJlXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Rustom",
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/1045fbbe7128778f155e460b2b1225775e2ecbae6997cb96cd80517a96d1435b.jpg",
        },
        {
          name: "Jolly LL.B 2",
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/40cad734d744fdf217ee769c7fc4f57172460d85a1343b526ae3a4985bd6471d.jpg",
        },
        {
          name: "Kesari",
          image:
            "https://m.media-amazon.com/images/M/MV5BMmUyYzA3MGQtNzE0Zi00Nzg0LTk4NTAtNDQ3YWQ4M2IwMWYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Mohra",
          image:
            "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F0%2Fgracenote%2F0853dc3aec24a18ec5a7615e83cb1472.jpg",
        },
        {
          name: "OMG",
          image:
            "https://upload.wikimedia.org/wikipedia/en/e/e0/OMG_Poster.png",
        },
        {
          name: "Khakee",
          image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Khakee.jpg",
        },
        {
          name: "Holiday",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Holiday_-_A_Soldier_Is_Never_Off_Duty_%28poster%29.jpg/220px-Holiday_-_A_Soldier_Is_Never_Off_Duty_%28poster%29.jpg",
        },
      ],
    },
    {
      name: "Ajay Devgn",
      image:
        "https://i.pinimg.com/236x/00/39/6c/00396c7d606df95b7d2e0ee62c7f4abb.jpg",
      movies: [
        {
          name: "Company",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTliMWMzYTktNGY0Yy00N2VjLTlmNjEtMDUwMWNjMmI3YmU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Tanhaji",
          image:
            "https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg",
        },
        {
          name: "Drishyam",
          image:
            "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg",
        },
        {
          name: "Maidaan",
          image:
            "https://resizing.flixster.com/5p2h8tLnhmqTDVpd71Nm4CM0DtE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczNmUzMmM0LTkwZTYtNGVkYS04MmQ1LTNhYjA0NjQ2NTM4Zi5qcGc=",
        },
        {
          name: "Golmaal",
          image:
            "https://upload.wikimedia.org/wikipedia/en/b/b4/Golmaal-Fun_Unlimited.jpg",
        },
        {
          name: "Runway 34",
          image:
            "https://upload.wikimedia.org/wikipedia/en/7/79/Runway_34_poster.jpg",
        },
        {
          name: "Raid",
          image:
            "https://assets.gadgets360cdn.com/pricee/assets/product/202211/Raid_1669364298.jpg",
        },
        {
          name: "Shaitaan",
          image:
            "https://upload.wikimedia.org/wikipedia/en/f/f0/Shaitaan_2024_film_theatrical_poster.jpeg",
        },
        {
          name: "Satyagraha",
          image:
            "https://upload.wikimedia.org/wikipedia/en/0/08/Satyagraha_poster.jpg",
        },
        {
          name: "Atithi Tum Kab Jaoge?",
          image:
            "https://m.media-amazon.com/images/M/MV5BNmJlOWY2M2MtOWYwZi00OWQ5LWJlNTUtZWQ5N2Q2ZDhhMTNmXkEyXkFqcGc@._V1_.jpg",
        },
      ],
    },

    {
      name: "Aamir Khan",
      image:
        "https://img.mensxp.com/media/content/2020/Mar/Bollywood-Blockbusters-Aamir-Khan-Declined-1200x900_5e6cd30229e73.jpeg",
      movies: [
        {
          name: "3 Idiots",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/220px-3_idiots_poster.jpg",
        },
        {
          name: "Lagaan",
          image:
            "https://m.media-amazon.com/images/M/MV5BM2FmODM4OTktOTRjOS00ZTIzLWIzZjAtMDBhOGEzYThkNzMzXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Dangal",
          image:
            "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
        },
        {
          name: "Like Stars on Earth",
          image:
            "https://m.media-amazon.com/images/M/MV5BZTI0ZGRiMDEtNGNjMS00MGU4LWI3OTktNzcxMDZmZTk3MTljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Sarfarosh",
          image:
            "https://m.media-amazon.com/images/M/MV5BZjk0MmRkOWQtYjY1OS00ZjA4LTk3YzMtNWYyNzZmNGJkNGZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "PK",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Jo Jeeta Wohi Sikandar",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTRkMTFhMzMtOWViMi00NzBhLTg2Y2QtMjBkMDQxNzRiZWI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Ghulam",
          image:
            "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ghulam--hindi-dub--et00001348-24-03-2017-16-44-21.jpg",
        },
        {
          name: "Talaash",
          image:
            "https://upload.wikimedia.org/wikipedia/en/f/f3/Talaash_poster.jpg",
        },
        {
          name: "Secret Superstar",
          image:
            "https://upload.wikimedia.org/wikipedia/en/5/50/Secret_Superstar_-_Poster_3.jpg",
        },
      ],
    },

    {
      name: "Shahid Kapoor",
      image:
        "https://images.filmibeat.com/img/2015/09/16-1442397261-shahid-kapoor-selfie.jpg",
      movies: [
        {
          name: "Vivah",
          image:
            "https://xstreamcp-assets-msp.streamready.in/assets/SHEMAROOME/MOVIE/6478329559fcb666645f5f60/images/xl_image_2_3_airtel_1723016573.jpg",
        },
        {
          name: "Kabir Singh",
          image:
            "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg",
        },
        {
          name: "Jab We Met",
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
        },
        {
          name: "Bloody Daddy",
          image:
            "https://m.media-amazon.com/images/M/MV5BM2QyZDYzNDAtZGFlMi00ZjEzLWI5ZjMtOTZjOGY2ZmRkOWFkXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Jersey",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTQ1M2U2NzItYjFkZS00NjhlLTk0MGItNDVmMWM4ODAyMjkwXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Padmaavat",
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/463fab8db1fc9cf1974e4f230d6041a8947fb3666093ad66b9d7b0e598ac8295.jpg",
        },
        {
          name: "Rajkumar",
          image:
            "https://upload.wikimedia.org/wikipedia/en/5/5e/R..._Rajkumar_Theatrical_poster_%282013%29.jpg",
        },
        {
          name: "Batti Gul Meter Chalu",
          image:
            "https://upload.wikimedia.org/wikipedia/en/0/0a/Batti_Gul_Meter_Chalu_Poster.jpg",
        },
        {
          name: "Kaminey",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c0/Kamineyposter.jpg",
        },
        {
          name: "Rangoon",
          image:
            "https://upload.wikimedia.org/wikipedia/en/b/b3/RangoonPoster.jpg",
        },
      ],
    },

    {
      name: "Hrithik Roshan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aKQqBBKCnD7KDC7vodrdnJsAhVYQREzDgw&s",
      movies: [
        {
          name: "Zindagi Na Milegi Dobara",
          image:
            "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
        },
        {
          name: "Super 30",
          image:
            "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
        },
        {
          name: "Lakshya",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR293CZfhCj-PVtM8QxSouminALwmZldq5PHg&s",
        },
        {
          name: "Jodhaa Akbar",
          image:
            "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
        },
        {
          name: "Kaabil",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/ce/Kaabil_Movie_Poster.jpg",
        },
        {
          name: "Agneepath",
          image:
            "https://images.moviebuff.com/07daf91a-56a5-4da0-ab6a-212dcff908c6?w=1000",
        },
        {
          name: "Mission Kashmir",
          image: "https://static.toiimg.com/photo/61237106.cms",
        },
        {
          name: "Krrish",
          image:
            "https://upload.wikimedia.org/wikipedia/en/2/28/Krrish_3_%282013_film%29_poster.jpg",
        },
        {
          name: "Fighter",
          image:
            "https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg",
        },
        {
          name: "Na Tum Jaano Na Hum",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTU0NTcyZmMtNjI0MC00ZDJhLWJlYzAtMDdhNjY1Yjg2YmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
      ],
    },
  ];


return (
    <div className="main-container">
      <div className="left-panel">
        <h2>Actors</h2>
        <div className="actor-scroll">
          {actors.map((actor, index) => (
            <div
              key={index}
              className={`actor-card ${selectedActor === actor ? "selected" : ""}`}
              onClick={() => setSelectedActor(actor)}
            >
              <img src={actor.image} alt={actor.name} />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        {selectedActor ? (
          <>
            <h2>{selectedActor.name}'s Movies</h2>
            <div className="movie-grid">
              {selectedActor.movies.map((movie, index) => (
                <div key={index} className="movie-card">
                  <img src={movie.image} alt={movie.name} />
                  <p>{movie.name}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>Select an actor to view movies</h2>
        )}
      </div>
    </div>
  );
};

export default App;