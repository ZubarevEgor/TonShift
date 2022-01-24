import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FixedSizeList } from 'react-window';
import { assetsMock } from '../../mocks/mocks';
import useResizeObserver from 'use-resize-observer';

const PoolsList = memo(() => {
  const { t } = useTranslation();
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <Grid templateRows={'0.5fr 10fr '} h="full" gap={4} p={4}>
      <GridItem>
        <Button w="full">{t('connect wallet')}</Button>
      </GridItem>
      <GridItem ref={ref}>
        <FixedSizeList
          innerElementType={'ul'}
          itemData={assetsMock}
          itemCount={assetsMock.length}
          itemSize={20}
          height={height}
          width={width}
        >
          {({ data, index, style }) => {
            return <li style={style}>{data[index].name}</li>;
          }}
        </FixedSizeList>
      </GridItem>
    </Grid>
  );
});

PoolsList.displayName = 'PoolsList';
export { PoolsList };
