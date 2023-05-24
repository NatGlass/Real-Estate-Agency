import { v4 as uuid } from "uuid";

const SanatiseBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();
            // If there are blocks within blocks, assign them unique ids too
            if (block.innerBlocks?.length) {
                assignIds(block.innerBlocks);
            }
        });
    }

    assignIds(blocks);

    return blocks;
}

export default SanatiseBlocks