let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.z = 3;
let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshPhongMaterial({
    color: "rgb(234, 128, 252)",
    specular: 0x050505,
    shininess: 100
});


const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);
let cube = new THREE.Mesh(box,material);
scene.add(cube);
const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


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
