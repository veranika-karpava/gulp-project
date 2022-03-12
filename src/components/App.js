import React from 'react';
import Header from '../components/Header';
import FilterSection from './FilterSection';
import Footer from './Footer';
import ProjectInfo from './ProjectInfo';

const status = [
  {
    status: "All Statuses"
  },
  {
    status: "Non-Completed"
  },
  {
    status: "Completed"
  }
]

const info = [
  {
    devName: 'Jenny Wilson',
    statuses: [
      {
        nonCompleted: [
          {
            projectName: "Science & Information Platform",
            addInfo: [
              {
                lead: "Ralph Edwards",
                created: "25/06/2019",
                finished: "30/06/2020",
                categories: "CMS Production",
                time: "https://lh3.googleusercontent.com/1MRdZbhLKoKvRbKX2A3ETOp2lksT8F48b4nr9G2fg9F-g9EEa3Gic42f6bUHbWihpkfU9g=s20",
                label: "Hourly",
                tag: "https://www.figma.com/file/G4Fdb5bQvW2tNskfvWrTf1/Front-end-Test-Task?node-id=0%3A29",
                team: "Jane Cooper, Wade Warren, Esther Howard, Cameron Williamson, Brooklyn Simmons, Leslie Alexander, Jenny Wilson, Gur Hawkins, Robert Fox, Jacob Jones, Kristin Watson, Cody Fisher, Savannah Nguen, Bessie Cooper, Albert Flores, Ralph Edwards, Dianne Russel, Devon Lane, Marvin McKinney, Jerome Bell, Courtney Henry, Theresa Webb, Kathrin Murphu, Eleonora Pena, Floud Miles, Darrell Steward"
              }],
            timeInfo: [
              {
                total: [],
                current: [
                  {
                    month: [
                      { name: "Sep" }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        completed: [
          {
            projectName: "Something else",
          }
        ]
      }
    ]
  },
  {
    devName: 'Jane Cooper'
  },
  {
    devName: ' Wade Warren'
  },
  {
    devName: ' Esther Howard'
  }
]



function App() {


  return (
    <div className="App">
      <Header />
      <FilterSection data={info} status={status} />
      <ProjectInfo />
      <Footer />
    </div>
  );
}

export default App;
