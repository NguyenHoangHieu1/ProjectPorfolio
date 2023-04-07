import { PropsWithChildren } from "react"
import face from "../../assets/face.png"

const SmallIntro: React.FC<PropsWithChildren> = (props) => {
  return (
    <section className="m-auto max-w-6xl">
      <h1 className="text-center  text-3xl text-teal-300 ">About me</h1>
      <h3 className="text-center text-xl my-5">
        A journey to become a better me!
      </h3>
      <div className="flex flex-col gap-5 mb-10">
        <p>
          When I was 16, I was still just a young kid living in the pandemic.
          Being an introver, living at home everyday because of quarantine is
          one of the best thing that could ever happen to me! I didn't have to
          go to school, I didn't have to learn the old lessons, All I did was
          just to find a new hobby. That's when it came to my mind,{" "}
          <code>Programming</code>!
        </p>
        <div className="flex gap-2">
          <div className="w-1/4">
            <img
              className="w-96 "
              src={face}
              alt="My face when I was programming this about page"
            />
            <i className="text-sm">This is me When I code this about page</i>
          </div>

          <div className="w-3/4 ">
            <p className="pb-5">
              Well the first Language I learnt was not a Programming Language,
              It was HTML, a hyper text Markup Language. Learning the Language
              was fun, because I had no idea how programming worked back at the
              day. Then I began to learn CSS so that I can fine-tune my website
              to look more appealing. Then I got stuck because they are so many
              effects that I want to learn. But back then, my skills weren't
              enough to dive deep. That's when I started to learn Bootstrap 4
            </p>
            <p className="pb-5">
              The best library for me to style my website even faster and more
              appealing. Of course I didn't have the knowledge of designing. So
              the base design of Bootstrap had made my websites even better.
              When I made a lot of beautiful websites, I started to get curious
              at learning Javascript. My first programming Language ever, I was
              so hyped to learn what's a variable was, how a for-loop worked,
              if-else statements and much more.
            </p>
            <p className="pb-5">
              I got addicted to programming and I programmed every day, I woke
              up at 4am Everyday, programmed for 1 and a half hour then Went to
              school, When I came back to school, I hopped to computer and
              started to code from 1pm to 7pm. Every single day, repeat repeat
              repeat.
            </p>
          </div>
        </div>
        <p>
          Then I got fed up, That's when I knew, I f*cked up. I programmed for
          too long, it burned down every single excitement from me to
          programming. Then I gave up because I had no interest in programming
          anymore. 1 and a half year later, somehow I chose IT to be my main
          study for the next 4 years in a university. My journey began again.
        </p>
        <p>
          Now Here I am, I have gone so far, learning a lot from my mistakes and
          trying to be a better person everyday!
        </p>
        <h3>
          Hope my journey can motivate someone to keep going and never give up.
          But you deserve some rest once in a while. Don't burn out okay ?
        </h3>
      </div>
    </section>
  )
}

export default SmallIntro
