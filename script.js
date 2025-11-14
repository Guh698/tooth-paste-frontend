gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Draggable,
  InertiaPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  DrawSVGPlugin,
  Flip
);

document.addEventListener("DOMContentLoaded", () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
  });

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
  }

  function opening() {
    let tl = gsap.timeline({
      repeat: 9,
      yoyo: true,
      onComplete: () => {
        gsap.set(".cenario1", { opacity: 0 });
        gsap.set(".cenario1-take2", { opacity: 1 });
        gsap.set(".take2-mov1", { opacity: 1 });
        gsap.to(".cenario1-take2", {
          x: "-20%",
          delay: 1.3,
          duration: 2.7,
        });
        gsap.to(".website-opening .take2-mov1", {
          x: "10%",
          delay: 0.3,
          duration: 2.7,
        });
        gsap.set(".mov1", { opacity: 0 });
        /*mov1*/
        let take2Tl = gsap.timeline({
          repeat: 0,
          onComplete: () => {
            gsap.to(".website-opening", { opacity: 0, duration: 1 });
            gsap.to(".hero", { opacity: 1 });
            gsap.to("header", { opacity: 1 });
            resumeScroll();
          },
        });
        take2Tl.to("#head-base", {
          morphSVG: "#head-base-0",
          duration: 0.7,
          delay: 0.3,
        });
        take2Tl.to("#orelha", { morphSVG: "#orelha-0", duration: 0.7 }, "<");
        take2Tl.to("#olho1", { morphSVG: "#olho1-mov2", duration: 0.7 }, "<");
        take2Tl.to("#olho2", { morphSVG: "#olho2-mov2", duration: 0.7 }, "<");
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2", duration: 0.3, opacity: 0 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2", duration: 0.3, opacity: 0 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2", duration: 0.7 },
          "<"
        );
        take2Tl.to("#narina", { morphSVG: "#narina-mov2", duration: 0.7 }, "<");
        take2Tl.to(
          "#nariz-contorno",
          { morphSVG: "#nariz-contorno-mov2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          { morphSVG: "#roupa-base-7", duration: 0.7 },
          "<"
        );
        /*mov2*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to("#orelha", { morphSVG: "#orelha-0-6", duration: 0.7 }, "<");
        take2Tl.to("#olho1", { morphSVG: "#olho1-mov2-0", duration: 0.7 }, "<");
        take2Tl.to("#olho2", { morphSVG: "#olho2-mov2-6", duration: 0.7 }, "<");
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8", duration: 0.3, opacity: 1 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1", duration: 0.7, opacity: 1 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          { morphSVG: "#nariz-contorno-mov2-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          { morphSVG: "#roupa-base-7-9", duration: 0.7 },
          "<"
        );
        /*mov3*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          { morphSVG: "#nariz-contorno-mov2-5-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3",
            duration: 0.7,
          },
          "<"
        );
        /*mov4*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1-8", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          { morphSVG: "#nariz-contorno-mov2-5-4-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8",
            duration: 0.7,
          },
          "<"
        );
        /*mov5*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1-8-7", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          { morphSVG: "#nariz-contorno-mov2-5-4-4-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2",
            duration: 0.7,
          },
          "<"
        );
        /*mov6*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1-8-7-8", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            opacity: 0,
            duration: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8",
            duration: 0.7,
          },
          "<"
        );
        /*mov7*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1-8-7-8-7", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to("#orelha", { opacity: 0, duration: 0.1 }, "<");
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1-3-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6-4-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2-0",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            opacity: 0,
            duration: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8-3",
            duration: 0.7,
          },
          "<"
        );
        /*mov8*/
        take2Tl.to(
          "#head-base",
          { morphSVG: "#head-base-0-2-1-8-7-8-7-7", duration: 0.7, delay: 0.1 },
          "<"
        );
        take2Tl.to("#orelha", { opacity: 0, duration: 0.1, delay: 0.2 }, "<");
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9-7-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7-3-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2-9-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5-9-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9-1-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1-3-6-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6-4-8-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1-5-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2-0-6",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            opacity: 0,
            duration: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7-7-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6-4-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8-3-7",
            duration: 0.7,
          },
          "<"
        );
        /*mov9*/
        take2Tl.to(
          "#head-base",
          {
            morphSVG: "#head-base-0-2-1-8-7-8-7-7-9",
            duration: 0.7,
            delay: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9-7-6-5", duration: 0.7 },
          "<"
        );
        take2Tl.to("#orelha", { opacity: 1, duration: 0.1 }, "<");
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7-3-4-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2-9-1-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5-9-3-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9-1-2-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1-3-6-2-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6-4-8-2-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1-5-1-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2-0-6-1",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            opacity: 0,
            duration: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7-7-1-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6-4-5-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8-3-7-1",
            duration: 0.7,
          },
          "<"
        );
        /*mov10*/
        take2Tl.to(
          "#head-base",
          {
            morphSVG: "#head-base-0-2-1-8-7-8-7-7-9-3",
            duration: 0.7,
            delay: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9-7-6-5-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7-3-4-3-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2-9-1-4-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5-9-3-2-5", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9-1-2-1-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          { morphSVG: "#sombrancelha1-mov2-1-9-7-1-3-6-2-3-2", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          { morphSVG: "#sombrancelha2-mov2-0-8-0-6-4-8-2-3-0", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1-5-1-4-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2-0-6-1-6",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            opacity: 1,
            duration: 0.1,
          },
          "-=0.3"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7-7-1-9-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6-4-5-2-7", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8-3-7-1-4",
            duration: 0.7,
          },
          "<"
        );
        /*mov11*/
        take2Tl.to(
          "#head-base",
          {
            morphSVG: "#head-base-0-2-1-8-7-8-7-7-9-3-0",
            duration: 0.7,
            delay: 0.1,
          },
          "<"
        );
        take2Tl.to(
          "#orelha",
          { morphSVG: "#orelha-0-6-6-3-1-9-7-6-5-1-6", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho1",
          { morphSVG: "#olho1-mov2-0-0-3-5-7-3-4-3-8-3", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#olho2",
          { morphSVG: "#olho2-mov2-6-4-8-1-2-9-1-4-9-1", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail1",
          { morphSVG: "#eye-detail1-mov2-8-1-1-7-5-9-3-2-5-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#eye-detail2",
          { morphSVG: "#eye-detail2-mov2-3-6-7-2-9-1-2-1-6-8", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#sombrancelha1",
          {
            morphSVG: "#sombrancelha1-mov2-1-9-7-1-3-6-2-3-2-4",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#sombrancelha2",
          {
            morphSVG: "#sombrancelha2-mov2-0-8-0-6-4-8-2-3-0-3",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#narina",
          { morphSVG: "#narina-mov2-2-8-3-4-1-5-1-4-8-4", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#nariz-contorno",
          {
            morphSVG: "#nariz-contorno-mov2-5-4-4-2-2-0-6-1-6-6",
            duration: 0.7,
          },
          "<"
        );
        take2Tl.to(
          "#pescoco-base",
          { morphSVG: "#pescoco-base-4-8-1-8-5-7-7-1-9-7-0", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#pescoco-sombra",
          { morphSVG: "#pescoco-sombra-1-1-2-7-5-6-4-5-2-7-9", duration: 0.7 },
          "<"
        );
        take2Tl.to(
          "#roupa-base",
          {
            morphSVG: "#roupa-base-7-9-3-8-2-8-3-7-1-4-6",
            duration: 0.7,
          },
          "<"
        );
      },
    });
    let CenarioTL = gsap.timeline({ repeat: -1, yoyo: true });
    gsap.to(".website-opening .cenario1", {
      scale: 1.5,
      duration: 5.7,
      ease: "none",
    });
    gsap.to(".website-opening", {
      opacity: 1,
      duration: 1.3,
    });
    CenarioTL.to(".website-opening .cenario1", { y: "-0.7%", ease: "none" });
    CenarioTL.to(".website-opening .cenario1", { y: "0.7%", ease: "none" });

    tl.to("#blusa-base", { morphSVG: "#blusa-base-mov2", duration: 0.5 }, "<");
    tl.to(
      "#blusa-shadow11",
      { morphSVG: "#blusa-shadow11-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow10",
      { morphSVG: "#blusa-shadow10-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow9",
      { morphSVG: "#blusa-shadow9-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow8",
      { morphSVG: "#blusa-shadow8-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow6",
      { morphSVG: "#blusa-shadow6-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow5",
      { morphSVG: "#blusa-shadow5-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow4",
      { morphSVG: "#blusa-shadow4-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow3",
      { morphSVG: "#blusa-shadow3-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow2",
      { morphSVG: "#blusa-shadow2-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-shadow1",
      { morphSVG: "#blusa-shadow1-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-line5",
      { morphSVG: "#blusa-line5-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-line4",
      { morphSVG: "#blusa-line4-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-line3",
      { morphSVG: "#blusa-line3-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-line2",
      { morphSVG: "#blusa-line2-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho6",
      { morphSVG: "#blusa-light-brilho6-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho5",
      { morphSVG: "#blusa-light-brilho5-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho4",
      { morphSVG: "#blusa-light-brilho4-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho3",
      { morphSVG: "#blusa-light-brilho3-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho2",
      { morphSVG: "#blusa-light-brilho2-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#blusa-light-brilho1",
      { morphSVG: "#blusa-light-brilho1-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#touca-line1",
      { morphSVG: "#touca-line1-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#touca-line2",
      { morphSVG: "#touca-line2-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#touca-light-brilho1",
      { morphSVG: "#touca-light-brilho1-mov2", duration: 0.5 },
      "<"
    );
    tl.to(
      "#touca-light-brilho2",
      { morphSVG: "#touca-light-brilho2-mov2", duration: 0.5 },
      "<"
    );
    tl.to("#touca-base", { morphSVG: "#touca-base-mov2", duration: 0.5 }, "<");
    tl.to(
      "#cabeca-base",
      { morphSVG: "#cabeca-base-mov2", duration: 0.5 },
      "<"
    );
    tl.to("#path42", { morphSVG: "#path42-mov2", duration: 0.5 }, "<");
    tl.to("#path43", { morphSVG: "#path43-mov2", duration: 0.5 }, "<");
    tl.to("#path44-5", { morphSVG: "#path44-5-mov2", duration: 0.5 }, "<");
    tl.to("#path46", { morphSVG: "#path46-mov2", duration: 0.5 }, "<");
    tl.to("#path47", { morphSVG: "#path47-mov2", duration: 0.5 }, "<");
    tl.to("#path48", { morphSVG: "#path48-mov2", duration: 0.5 }, "<");
    tl.to("#path50", { morphSVG: "#path50-mov2", duration: 0.5 }, "<");
    tl.to("#path51", { morphSVG: "#path51-mov2", duration: 0.5 }, "<");
    tl.to("#path52", { morphSVG: "#path52-mov2", duration: 0.5 }, "<");
    tl.to("#path53", { morphSVG: "#path53-mov2", duration: 0.5 }, "<");
    tl.to("#path55", { morphSVG: "#path55-mov2", duration: 0.5 }, "<");
    tl.to("#path41-6", { morphSVG: "#path41-6-mov2", duration: 0.5 }, "<");
    tl.to("#path43-4", { morphSVG: "#path43-4-mov2", duration: 0.5 }, "<");
    tl.to("#path54-7", { morphSVG: "#path54-7-mov2", duration: 0.5 }, "<");
    tl.to("#path56", { morphSVG: "#path56-mov2", duration: 0.5 }, "<");
  }

  let momentsTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".feature1",
      start: "center center",
      end: "+=3000",
      pin: true,
      scrub: true,
    },
  });

  momentsTL.to(".img1", { opacity: 1, scaleX: 1 });
  momentsTL.to(".img1", { y: "-100%" }, "-=0.1");
  momentsTL.to(".img2", { opacity: 1, scaleX: 1 }, "-=0.7");
  momentsTL.to(".img2", { y: "-100%" }, "-=0.1");
  momentsTL.to(".img3", { opacity: 1, scaleX: 1 }, "-=0.7");
  momentsTL.to(".img3", { y: "-100%" }, "-=0.1");
  momentsTL.to(".img4", { opacity: 1, scaleX: 1 }, "-=0.7");
  momentsTL.to(".img4", { y: "-100%" }, "-=0.1");
  momentsTL.to(".img5", { opacity: 1, scaleX: 1 }, "-=0.7");
  momentsTL.to(".img5", { y: "-100%" }, "-=0.1");
  momentsTL.to(".img6", { opacity: 1, scaleX: 1 }, "-=0.7");
  momentsTL.to(".img6", { y: "-100%" }, "-=0.1");

  gsap.set(".text", { opacity: 0, y: 50 });

  const texts = document.querySelectorAll(".text");

  texts.forEach((text) => {
    ScrollTrigger.create({
      trigger: text,
      start: "top 70%",
      scrub: true,
      onEnter: () => {
        gsap.to(text, { opacity: 1, y: 0, duration: 0.7 });
      },
      onLeaveBack: () => {
        gsap.to(text, { opacity: 0, y: 50, duration: 0.7 });
      },
    });
  });

  ScrollTrigger.create({
    trigger: ".feature2-animation-container",
    start: "top 70%",
    scrub: true,
    onEnter: () => {
      gsap.to(".feature2-animation-container img", {
        x: 0,
        duration: 4,
        ease: "power1.inOut",
      });
      gsap.to(".feature2-animation-container svg", {
        x: 0,
        duration: 4,
        ease: "power1.inOut",
      });
    },
    onEnterBack: () => {
      gsap.to(".feature2-animation-container img", {
        x: 0,
        duration: 4,
        ease: "power1.inOut",
      });
      gsap.to(".feature2-animation-container svg", {
        x: 0,
        duration: 4,
        ease: "power1.inOut",
      });
    },
    onLeave: () => {
      gsap.set(".feature2-animation-container img", {
        x: "-70%",
      });
      gsap.set(".feature2-animation-container svg", {
        x: "70%",
      });
    },
    onLeaveBack: () => {
      gsap.set(".feature2-animation-container img", {
        x: "-70%",
      });
      gsap.set(".feature2-animation-container svg", {
        x: "70%",
      });
    },
  });

  gsap.to(".feature3-closeIMG", {
    y: "-7%",
    scrollTrigger: {
      trigger: ".feature3",
      start: "top center",
      scrub: true,
      ease: "none",
    },
  });

  gsap.to(".feature3-closeIMG img", {
    y: "10%",
    scrollTrigger: {
      trigger: ".feature3",
      start: "top center",
      scrub: true,
      ease: "none",
    },
  });

  let footerTL = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      scrub: true,
      ease: "power4.inOut",
    },
  });

  footerTL.to(".footer-overlay", {
    y: "-127%",
    duration: 2.7,
  });

  pauseScroll();
  opening();
});
