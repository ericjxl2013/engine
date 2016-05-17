float getShadowVSM(sampler2D shadowMap, vec3 shadowParams) {
    return VSM(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y);
}

float getShadowSpotVSM(sampler2D shadowMap, vec4 shadowParams) {
    return VSM(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y);
}

