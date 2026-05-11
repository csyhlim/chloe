const message = `Hi Doll,
hehe sorry na, this is actually my first time writing a letter like this directly… I know we only just met in such a random way (and honestly I’m really grateful I found you). Shout out to TikTok live for that lol.

I still remember the first time I followed you on IG, on the 25th. I was actually a bit nervous and shy… scared you’d think it was weird—like “who is this random person suddenly following me?” Then on the 26th I got the notification that you followed me back… I swear I was so happy. I didn’t expect you to notice me too.

A few days later, on Friday, I finally gathered all my courage to reply to your notes (and trust me, that took a lot of mental preparation). And somehow we just ended up talking all night… I even stayed up just to talk to you. I listened to all your song recommendations too.

Then there was a day where I suddenly felt like maybe I was disturbing you, so I didn’t dare text you again. But I couldn’t do it… I still wanted to talk to you. So after I finished watching your tiktok live, I ended up reaching out to you again just to get your attention 

To be honest, I sometimes feel insecure and a bit shy when I talk to you. My English isn’t that good, and I’m scared my grammar will be messy when I text you, so I even double check everything before sending it. Maybe even this letter was written with Google Translate help lol :p

I’ve liked you since the first time I saw you on live. But I guess I didn’t have enough confidence to approach you because you’re really beautiful, talented, and honestly kind of perfect in my eyes. I kept thinking I’m probably not good enough for you… and I even assumed you might already like someone else or still be moving on from your past.

But I didn’t want to lose the chance to get to know you, so I gathered all my courage to talk to you.

To be honest, I’m usually really scared when it comes to feelings. I don’t even like people easily… but you somehow make me want to do things I usually wouldn’t do, just to be closer to you.

I’m not expecting anything from you. I’m not asking you to like me back, or to treat me any differently. I’m really being sincere about everything I say.

So I just want to make my intention clear. I don’t want you to be confused. I didn’t come into your life just to be “a friend” and stay only as that label… but at the same time, I’m not forcing anything either. You don’t have to feel the same way.

At first, I just wanted to admire you quietly from a distance. But I guess I started hoping for a little more than that… so I want you to know I’m serious about getting to know you, even if this is still very early.

I’m not asking you to be my girlfriend right away or anything like that. I know we’ve only known each other for a few days, and there’s still a lot we don’t know about each other.

And there are also a lot of things I’ve been thinking about… especially about loving someone of the same gender. I do like you, but I also know the world has its norms, and things can be complicated. I don’t want to be selfish. Where I’m from, it’s really strict about this kind of thing, so it’s not something that feels easy or simple for me either.

So I guess I want to know how you feel about all of this too.. If I were to seriously pursue you one day, would you even be okay with all of that?

Like… maybe we can’t always call or video call freely, maybe I can’t show you off publicly, or introduce you easily to people close to me (except maybe one friend ‘col si burgis’). I’ve been thinking about how you’d feel about all that… like being something private or hidden.

I just want to be honest with you n i know this might still be too fast for me to say all of this… but I really mean it na.  I’m not here just to be friends, but I’m also not trying to rush you or pressure you into anything. I really want to get to know you more slowly and properly, learn everything about you, and let you know me too. I can’t promise you “forever,” but I’ll do my best for you. I want to love all of your imperfections too. I know I have a lot of flaws and I’m far from perfect, but I still want to try my best for you..

I want to love you in a sincere way, not just something shallow or based on attraction. I want it to be a gentle kind of love for you. I don’t know what your past was like, and I don’t need to know everything, but I just want to be someone who treats you gently and sincerely even if it feels a bit simple or “boring” sometimes.

Maybe we can just go with it step by step… but you already know what my intention is with you. And if one day you feel unsure about this, you can always be honest and tell me directly, okay? But I also need you to be clear with me from the start na..  i just hope you’ll be honest with me if you’re ever unsure about this, because I think I’d end up hoping a little too much for you. I won’t force you to love me back, and I’m not asking you to. Because honestly, I don’t really know if you’re just being friendly to me, or if there’s something more behind it… and I guess that’s the part that makes me overthink sometimes.

And if you don’t feel the same, or if this is too much for you, it’s really okay na.. I’ll understand. I won’t force anything or make you feel uncomfortable. I’ll just quietly step back and respect your space… and even if it stays only as a crush, I’ll still genuinely wish the best for you from a distance, in my own way.

Sorry for only saying this now. I’ve just been overthinking a lot and didn’t want to take the wrong step. I just didn’t want you to misunderstand my intention.

Thank you for reading this long letter na khun suayy 🤍`
;

function showBook() {

  // hide intro
  document.getElementById("introText").style.opacity = 0;

  document.querySelector(".btn").style.display = "none";

  // play music
  document.getElementById("bgMusic").play();

  setTimeout(() => {

    document.getElementById("book").style.display = "block";

    const typedText = document.getElementById("typedText");

    let i = 0;

    function typing() {

      if (i < message.length) {

        typedText.innerHTML += message.charAt(i);

        i++;

        // typing speed
        setTimeout(typing, 35);

      } else {

        // show ending
        document.getElementById("lastPage").style.display = "block";
      }
    }

    typing();

  }, 700);
}
