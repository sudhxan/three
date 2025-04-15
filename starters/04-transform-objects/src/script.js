import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Using groups
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 'red'})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 'blue'})
)
cube2.position.x = 1
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 'green'})
)
cube3.position.x = -1
group.add(cube3)





/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)
scene.add(mesh)
// console.log.(mesh.position.length())

//Scale: Helps stretch 3d objects in a particular direction
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
mesh.scale.set(2,0.5,0.5)

//Rotation
mesh.rotation.x = Math.PI *0.25
mesh.rotation.y = Math.PI *0.3
//when in a gimbal lock: reorder the rotations.

//Axes helper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 2
camera.position.y = 2
scene.add(camera)
camera.lookAt(mesh.position)

// mesh.position.normalize() //it brings length to 1
// console.log(mesh.position.distanceTo(camera.position)) // distance between the mesh and the camera

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)