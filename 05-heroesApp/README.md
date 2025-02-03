# **HeroesApp**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## **Development Server**

Follow these steps to set up and run the project:

1. **Clone the repository** from:  
   ```sh
   git clone https://github.com/Alreinzian/DC-Project.git
   ```
2. **Install dependencies**:  
   ```sh
   npm install
   ```
3. **Start the backend server**:  
   ```sh
   npm run backend
   ```
4. **Run the application**:  
   ```sh
   npm start
   ```
   Or alternatively:  
   ```sh
   ng serve -o
   ```

This will automatically open the application in your default web browser.

## **Database (Local JSON Data)**

```json
{
  "usuarios": [
    {
      "id": 1,
      "usuario": "John Doe",
      "email": "john.doe@gmail.com"
    }
  ],
  "heroes": [
    {
      "id": "dc-batman",
      "superhero": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "characters": "Bruce Wayne"
    },
    {
      "id": "dc-superman",
      "superhero": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "characters": "Kal-El"
    },
    {
      "id": "dc-flash",
      "superhero": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
      "id": "dc-green",
      "superhero": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
      "id": "dc-arrow",
      "superhero": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "More Fun Comics #73",
      "characters": "Oliver Queen"
    },
    {
      "id": "dc-wonder",
      "superhero": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "All Star Comics #8",
      "characters": "Princess Diana"
    },
    {
      "id": "dc-martian",
      "superhero": "Martian Manhunter",
      "publisher": "DC Comics",
      "alter_ego": "J'onn J'onzz",
      "first_appearance": "Detective Comics #225",
      "characters": "Martian Manhunter"
    },
    {
      "id": "marvel-spider",
      "superhero": "Spider-Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "characters": "Peter Parker"
    },
    {
      "id": "marvel-iron",
      "superhero": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "characters": "Tony Stark"
    }
  ]
}
```

This JSON structure serves as the local database for the project.
