import { v4 as uuid } from "uuid"

const SanatiseBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    console.log(blocks)

    const assignId = (b) => {
        b.forEach((block) => {
            block.id = uuid();
            if (block.innerBlocks?.length) {
                assignId(block.innerBlocks);
            }
        });
    };

    assignId(blocks);

    return blocks;
};

export default SanatiseBlocks