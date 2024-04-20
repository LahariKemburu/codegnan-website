import React from "react";
import Course_template from "./Course_template";
import java_photo from '/course_images/java.webp';

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template title="The Complete Core Java Course Syllabus 2024" date="January 25  ,2024" img={java_photo} 
            intro="Java has been around for a long time, since 1995, and still ranks among the top five most demanded programming languages by recruiters. 
            Learning Java can be a great skill to acquire if you want to work in the programming or software development domain. In addition, if you have knowledge of other programming languages and are looking to increase your skill set, Java can be a great option. 
            
            In a survey of 57,378 software developers globally, it was found that 63.1% of people are using HTML/CSS, SQL, Python, and Java, which makes considering a Java course a thoughtful decision. 
            
            But where do we start from? What is the syllabus for core Java? Are we really getting jobs immediately after completing a Java course? You will find all your answers from our guide today!"
            />
        </div>
    );
}