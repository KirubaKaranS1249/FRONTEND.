const testimonials = [
  {
    name: "KIRUBAKAARAN S",
    photoUrl: "https://cdn.wallpapersafari.com/86/30/6bvKMj.jpg",
    text: "Hi im a Java Full Stack Developer who is currently a fresher in the industry. He has skills in front-end and back-end development, with a particular focus on Java and SQL. His expertise includes creating applications with Java, working developing full-stack solutions.",
  },
  {
    name: "Boss kint",
    photoUrl: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
    text: `It seems like you typed "apple." Could you clarify what you're referring to or if there's something specific you'd like to discuss or ask about Apple`,
  },
  {
    name: "James goseling",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-LscmgJL7rlm1HsULOu7Q4lmFaCvIcHdQg&s",
    text: "When you mention you could be referring to the foundational concepts and basics of Java programming. Here's a brief overview of some core Java concepts including JDK, JRE, and JVM",
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 2000);
