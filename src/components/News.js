import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Will Etihad showdown decide Premier League title?",
            "description": "BBC Sport looks at what to expect in Wednesday's showdown between title rivals Manchester City and Arsenal.",
            "url": "http://www.bbc.co.uk/sport/football/65328322",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11EF4/production/_129506437_gettyimages-1247188536.jpg",
            "publishedAt": "2023-04-26T16:37:26.4480144Z",
            "content": "Former Arsenal striker Kevin Campbell looks ahead to a huge clash\r\n<table><tr><th>Premier League: Manchester City v Arsenal</th></tr>\r\n<tr><td>Venue: Etihad Stadium Date: Wednesday, 26 April Kick-off… [+8872 chars]"
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Lisalee Solomons",
            "title": "FEEL GOOD | Cape firefighters who braved Two Oceans marathon in full uniform raise R180K for NPO",
            "description": "Two Cape Town firefighters who ran the 2023 Totalsports Two Oceans Ultra Marathon while dressed in their full uniforms raised more than R180 000 for Volunteer Wildfire Services",
            "url": "https://www.news24.com/news24/southafrica/news/feel-good-cape-firefighters-who-braved-two-oceans-marathon-in-full-uniform-raise-r180k-for-npo-20230426",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/455/48bb6701ec6b46e1aaf0924e8c3f306d.jpg",
            "publishedAt": "2023-04-26T16:04:01+00:00",
            "content": "<ul><li>Two Cape Town firefighters ran the Totalsports Two Oceans half marathon more than a week ago in full firefighting gear.</li><li>They raised more than R180 000 for Volunteer Wildfire Services.… [+2638 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Five key matches from Arsenal's last title-winning season",
            "description": "BBC Sport takes a look back at five of the key matches during Arsenal's last title win in 2004, when they famously ended the season unbeaten.",
            "url": "http://www.bbc.co.uk/sport/av/football/65316079",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/A10E/production/_129403214_p0fhcgdk.jpg",
            "publishedAt": "2023-04-26T15:37:25.8700438Z",
            "content": "BBC Sport takes a look back at Arsenal's last title-winning season in 2004, when they famously never lost a game, while the current Gunners side battle against Manchester City for this season's Premi… [+45 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Listen: IPL - Royal Challengers Bangalore v Kolkata Knight Riders",
            "description": "Listen to BBC Radio 5 Sports Extra commentary as Royal Challengers Bangalore face Kolkata Knight Riders in the 2023 Indian Premier League.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/65180379",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-04-26T14:07:22.6513235Z",
            "content": "You need one to watch live TV on any channel or device, and BBC programmes on iPlayer. Its the law.\r\nFind out more"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Will Stanley",
            "title": "Man City v Arsenal: Get free bets when you bet with talkSPORT BET...",
            "description": "",
            "url": "https://talksport.com/football/1404473/man-city-arsenal-premier-league-free-bets-talksport-bet/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/02/PL-40-Football-Offer.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-04-26T09:00:52Z",
            "content": "The Premier League’s top two teams clash at the Etihad Stadium on Wednesday night as league leaders Arsenal take on Manchester City, with the league title potentially on the line.\r\nAnd talkSPORT BET … [+4196 chars]"
        },
        {
            "source": {
                "id": "il-sole-24-ore",
                "name": "Il Sole 24 Ore"
            },
            "author": null,
            "title": "Pnrr, dall’abbattimento dell’ecomostro a Roma al centro natatorio di Milano: gli interventi per lo sport",
            "description": "Bruxelles ha bocciato la ristrutturazione dello stadio di Firenze e il bosco dello sport di Venezia con risorse comunitarie ma i progetti per strutture sportive sono numerose: 1.873 su tutto il territorio nazionale",
            "url": "https://www.ilsole24ore.com/art/pnrr-dall-abbattimento-dell-ecomostro-roma-centro-natatorio-milano-interventi-lo-sport-AEs75NLD",
            "urlToImage": "https://i2.res.24o.it/images2010/2023/04/AEs75NLD/images/35df8dba-e299-11ed-9ae1-23bc68a92b15-fotohome0.jpg",
            "publishedAt": "2023-04-26T05:22:15Z",
            "content": "Ascolta la versione audio dell'articolo\r\n3' di lettura\r\nLa ristrutturazione dello stadio Artemio Franchi di Firenze e il bosco dello sport di Venezia non si faranno con i fondi del Pnrr. È la decisio… [+2403 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("this is constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Newz - Top Hadlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} discription={element.discription} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        );
                    })}


                </div>
            </div>
        );
    }
}

export default News