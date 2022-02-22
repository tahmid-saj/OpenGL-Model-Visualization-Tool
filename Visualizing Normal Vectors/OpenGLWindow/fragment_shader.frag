#version 330 core
out vec4 FragColor;

in vec3 Normal;
in vec3 Position;

uniform vec3 cameraPos;
uniform samplerCube skybox;

const float airRefIndex = 1.00;
const float glassRefIndex = 1.52;

void main()
{   
    float ratio = airRefIndex / glassRefIndex;
    vec3 I = normalize(Position - cameraPos);
    vec3 R = refract(I, normalize(Normal), ratio);

    if (gl_FrontFacing) {
        FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    else {
        FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
}