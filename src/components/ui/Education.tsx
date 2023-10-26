import Template from "../sections/Template.tsx";
import WorkItemList from "./WorkItemList.tsx";
import WorkItem from "./WorkItem.tsx";

export default function Education() {
  return (
    <Template title="EDUCATION">
      <WorkItemList>
        <WorkItem
          title="Bachelor Business Information Technology @ ZHAW"
          subtitle="08.2018 - 08.2022"
        >
          This bachelor program included a mix of business related classes (e.g.
          project management and requirements engineering) and technical classes
          (e.g. OOP using Java and machine learning in Python). I quickly
          learned that my interest lay in the technical domain and so i decided
          to attend more technical classes, especially at the end of the
          program. Nevertheless, I value the perspective the business related
          classes gave me, I learned a lot about the processes and way of
          thinking in this domain.
          <ul className="list-inside list-disc">
            <li>Final grade: 5.18</li>
            <li>Finished in the top 10%</li>
          </ul>
        </WorkItem>
        <WorkItem
          title="Certificate of advanced Oracle SQL @ Trivadis"
          subtitle="12.2017"
          tags={["Oracle"]}
        >
          During the year 2017 I was working in a project which heavily relied
          on an Oracle database. So the whole project team attended an offsite
          workshop where we learned a lot uf the subtle differences between
          Oracle and other SQL databases. Some of the advanced features we
          looked at in more detail: Indexing, Query-Plans.
        </WorkItem>
        <WorkItem
          title="Apprenticeship: Software Engineer @ SIX"
          subtitle="08.2013 - 08.2017"
        >
          My apprenticeship at SIX is the basis of my software-engineering
          education. During these four years I saw a lot of different teams in
          SIX and thus I came in contact with a lot of programming languages and
          technologies. This was also the time where I realized that programming
          is more than just a job for me, it is also my hobby :)
          <ul className="list-inside list-disc">
            <li>Final Grade: 5.2</li>
          </ul>
        </WorkItem>
      </WorkItemList>
    </Template>
  );
}
