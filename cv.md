# Aleksandr Riabov
## Junior Frontend Developer 
### Contacts:
* __Samara, Russia__
* __Telegram__: @Kukanium
* __E-mail__: AlexRiabow@mail.ru
* __Tel__: +79608208475
* __Discord__: Kukanium#5931
### About myself:
I am 22 years old, recently gratuated bachelor from PSUTI. Did learned front-end skills like HTML, CSS, JS in my free time, also worked for some time in a office in web studio. I want to learn front-end further and hope to get job offer.
### Skills:
* __HTML__
* __JavaScript__
* __CSS__ (Bootstrap, SASS/SCSS)
* __Git__
### Code Examples:
```
    return (
                <div className='List'>
                    <input className="CompetitionInput" type="text" placeholder="Найти соревнование..." onChange ={ Event => {this.setState({searchTerm: (Event.target.value)});}}/> 
                    <Link to={`/?q=${searchTerm}`} >
                        <button className='CompetitionCardButton'>Найти</button>
                    </Link>
                    <div className='ListOfCompetition'>
                        {competitions.filter((competition)=> {
                            if ( search == ""){
                                return competition
                            } else if ( competition.name.toLowerCase().includes(search.toLowerCase())) {    //Сравнение имени текущего элемента с поисковым запросом, обе строки в нижнем регистре
                                return competition
                            }                            
                        }).map(competition => (
                            <div key={competition.name} className='CompetitionCard' >
                                <p>{competition.name}</p>
                                <p>Место проведения: {competition.area.name}</p>
                                <p>Дата начала: {competition.currentSeason.startDate}</p>
                                <p>Дата окончания: {competition.currentSeason.endDate}</p>
                                <div className='CompetitionCardButtons'>
                                    <Link to={`/Teams/${competition.id}`} >
                                        <button className='CompetitionCardButton'>Список команд соревнования</button>
                                    </Link>
                                    <Link to={`/CompetitionMatches/${competition.id}`}>
                                        <button className='CompetitionCardButton'>Календарь матчей соревнования</button>
                                    </Link>
                                </div>    
                            </div>
                        ))}
                    </div>
                </div>
    );
```
### Education:
* __Povolzhskyi State University of Telecommunications and Informatics__ 
    * Informatics and computer engineering
* __Simbir Soft__ 
    * Front-end development Intensive course
### Languages:
* __Russian__ - native speaker
* __English__ - B1
* __German__ - A1
