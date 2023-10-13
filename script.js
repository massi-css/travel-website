gsap.to('.loading-page',{height:0 , duration: 1, delay: 3.5,stagger:{amount: 0.5} , ease: 'expo.inOut'})
gsap.fromTo('.h1', {opacity: 0, y:150 }, {opacity: 1 ,y:0 , duration: 0.5, delay: 3.5,stagger:{amount: 0.5}})
gsap.fromTo('.explore', {opacity: 0, y:150 }, {opacity: 1 ,y:0 , duration: 1, delay: 4})
gsap.fromTo('.logo-name',{y:50, opacity: 0},{y:0, opacity: 1, duration: 2 ,delay: 1 } )
gsap.fromTo('.loading-container', {opacity: 1}, {height:0 , duration: 1, delay: 3.5, ease: 'expo.inOut'})
gsap.to('.overlay',{height: 0 , duration: 1, delay: 3.5, ease: 'expo.inOut'})


