let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);
scene.add(camera);
camera.position.z = 5;
let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color:"rgb(234, 128, 252);"});
let cube = new THREE.Mesh(box,material);
scene.add(cube);
const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setSize(window.innerWidth,window.innerHeight);
let clock = new THREE.Clock();
let animationId;
let isAnimating = false;

function resetAnimation() {
    if (isAnimating) {
        cancelAnimationFrame(animationId);
    }
    clock.start();
    isAnimating = true;
    animate();
}

function animate() {
    if (!isAnimating) {
        cancelAnimationFrame(animationId);
        return;
    }
    animationId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x = clock.getElapsedTime();
    cube.rotation.y = clock.getElapsedTime();
}
renderer.render(scene, camera);