import React from "react";
import HornedBeast from './HornedBeast.js'


class Main extends React.Component {
  render() {
    return (
      <>
        <main> 
          <HornedBeast url='https://images.unsplash.com/photo-1488031470693-c1a6d1a4fff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='Chameleon' name="Chameleon" about="It's easy to tell a male Jackson's chameleon from a female: only the males have horns. The male's 3 horns make him look a little like a mini triceratops! Because of this fancy headgear, these lizards are sometimes called 3-horned chameleons. The horns are used to defend the male's territory." />
          <HornedBeast url='https://images.unsplash.com/photo-1569099664405-cb216ee0e483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1904&q=80' alt='Beetle' name="Black Locust Borer" about="Black locust borers are beetles that specialize in attacking one genus of tree, the black locust! Females lay eggs on the bark and larvae tunnel into the trees. They hibernate over the winter. In spring, they become active again, and by late summer, a larva has dug up to 10 cm (4 in) of tunnel, .6 cm (¼ in) in diameter. This tunneling weakens the trees to the point that some break from the wind. Adults are slender beetles about 2 cm (3/4 in) long with two antennae. Females and males look the same. In the larval and pupal stages, they are cream-colored. Sometimes they are called “long horn beetles.”" />
        </main>
      </>
    )
  }
}


export default Main;