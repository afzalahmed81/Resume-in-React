import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Resume() {
  return <div><h1 class="title">Resume</h1>
  <hr /> <br />
  <h2>Objective:&nbsp;&nbsp;&nbsp; I am looking forward to learn skills of full stack development
      and work as a freelance <br/>web developer. </h2>
  <br />
 <div class="info-blocks">
      <h2><u>Personal Information:</u></h2>
      <ul>
          <li>Name: Afzal Ahmed </li>
          <li>Qualificatio: M.Sc Applied Physics (Specialization in Electronics)</li>
          <li>Email: afzalahmed123@gmail.com</li>
          <li>Saeedabad karachi</li>
      </ul>
  </div>
  <div class="info-blocks">
      <h2><u>Academic Qualification</u></h2>
      <ul>
          <li>M.Sc. Applied Physics (Specialization in Electronics) from University of Karachi</li>
          <li>B.Sc. in (Physics, mathematics, statistics) from S.M Government science college, Karachi</li>

      </ul>
  </div>
  <div class="info-blocks">
      <h2><u>Courses and Certifications</u></h2>
      <ol>
          <li>Internet of things (IOT) from PIAIC</li>
          <li>Inferntial Statistics on COURSERA from Duke University</li>
          <li>Master trainer certification from Election Commission of Pakistan</li>
          <li>Microsoft office training from CTLC</li>
      </ol>
  </div>
  <div class="info-blocks">
      <h2><u>Work Experience</u></h2>
      <ul>
          <li>Currently Working as Lecturer in Physics at a College</li>
          <li>Have been working as instrumentation Engineer at Rays Technologies</li>
          <li>Have been working as sales and service Engineer at We Brothers Scientific</li>
          <li>Have been working as system support Engineer  at Monilink call center </li>

      </ul>
  </div>
  <div class="info-blocks">
      <h2><u>Skills</u></h2>
      <ol>
          <li>Familiarity with programming languages e.g C, R, Python, Rust</li>
          <li>Good at Reading, Writing, speaking English language</li>
          <li>Familiarity with Linux Operating system</li>
          <li>Hands on experience on softwares such as Microsoft word, Excel and minitab</li>
          <li>Learning full stack web development</li>
      </ol>
  </div>
  <hr/>
</div>;
}

ReactDOM.render(<Resume/>, document.querySelector('#root'));