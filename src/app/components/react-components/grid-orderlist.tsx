import React from 'react';
import { Grid, GridItem, Box} from '@bigcommerce/big-design';
export default class ReactGrid extends React.Component<any> {

    constructor(props) {
        super(props)
    }

    render() {
        const { items } = this.props;

        return (
            <>
                <Grid>
                    <GridItem>
                        <Box backgroundColor="white" border="box" borderRadius="normal" padding="medium">Item 1</Box>
                    </GridItem>
                </Grid>
            </>
        );
    }
}