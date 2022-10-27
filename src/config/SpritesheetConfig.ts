const SpritesheetConfig = (() => {
    const HOUSE_SPRITESHEET = require("../assets/spritesheets/house_spritesheet.png");
    const COOKING_SPRITESHEET = require("../assets/spritesheets/cooking_spritesheet.png");
    const SELLING_SPRITESHEET = require("../assets/spritesheets/selling_spritesheet.png");
    const SERVICE_SPRITESHEET = require("../assets/spritesheets/service_spritesheet.png");
    const SOCIAL_SPRITESHEET = require("../assets/spritesheets/social_spritesheet.png");
    const DECORATION_SPRITESHEET = require("../assets/spritesheets/decoration_spritesheet.png");
    const FALLBACK_SPRITESHEET = require("../assets/spritesheets/unknown_texture.png");

    return {
        HOUSE_SPRITESHEET,
        COOKING_SPRITESHEET,
        SELLING_SPRITESHEET,
        SERVICE_SPRITESHEET,
        SOCIAL_SPRITESHEET,
        DECORATION_SPRITESHEET,
        FALLBACK_SPRITESHEET
    };
})();

export default SpritesheetConfig;
