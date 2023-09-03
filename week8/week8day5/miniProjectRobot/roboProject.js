const robots = [
    {
      id: 1,
      name: "MBS",
      username: "MBS",
      email: "MbSaudiArabiaModernizer@Lies.com",
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: "KimJungUn",
      username: "KimJungUNO",
      email: "kimJungLovesFreedom@fakenews.com",
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: "Netanyahu",
      username: "iHateDemocracy",
      email: 'AntiRights@terribleleader.com',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: "Trump",
      username: "terribleMan1",
      email: 'dtrump@trash.com',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: "AyotollahK",
      username: "ayoCakes",
      email: "ayoCakes788@gmail.com",
      image: 'https://robohash.org/5?200x200'
    },
   
   ];
  
  const robotContainer = document.getElementById('robot-container');
  const searchInput = document.getElementById('search');
  
  
  function createRobotCard(robot) {
      const card = document.createElement('div');
      card.classList.add('robot-card');
  
      card.innerHTML = `
          <img src="${robot.image}" alt="${robot.name}">
          <h2>${robot.name}</h2>
          <p>${robot.email}</p>
      `;
  
      robotContainer.appendChild(card);
  }
  
  
  function filterRobots() {
      const searchText = searchInput.value.toLowerCase();
  
      robotContainer.innerHTML = '';
  
      robots.forEach(robot => {
          if (robot.name.toLowerCase().includes(searchText)) {
              createRobotCard(robot);
          }
      });
  }
  
  
  robots.forEach(robot => createRobotCard(robot));
  
  
  searchInput.addEventListener('input', filterRobots);