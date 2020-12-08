import React from 'react';
import { Grid, GridItem, Box, Flex, FlexItem, H1, Text, H0, Link } from '@bigcommerce/big-design';
import Button from '../react-components/button';
export default class ReactGrid extends React.Component<any> {

    constructor(props) {
        super(props)
    }

    render() {
        const { storeDomain, variantCount, inventoryCount, inventoryValue } = this.props.data;
        console.log('this.props', this.props.data);
        return (
            < >
                <Grid>
                    <GridItem>
                        <Box backgroundColor="white" border="box" borderRadius="normal" padding="medium">

                            <div className="row">
                                <div className="col-md-10">
                                    <H1>Store Overview</H1>
                                    <Text>A view into your default Bigcommerce storefront.</Text>
                                </div>
                                <div className="col-md-2" >
                                    <Link href="storeDomain" target="_blank" external>
                                        View Storefront
                                    </Link>
                                </div>
                            </div>

                            <Box marginTop="medium" backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                                <Text bold>Domain</Text>
                                <Text>{storeDomain} </Text>
                            </Box>
                        </Box>

                        <Box marginTop="medium" backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                            <div className="row">
                                <div className="col-md-10">
                                    <H1>Catalog Summary</H1>
                                    <Text>A simple overview of your catalog.</Text>
                                </div>
                                <div className="col-md-2" >
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }} className="row">
                                <div className="col-md-4">
                                    <Box style={{ maxWidth: '400px' }} backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                                        <Text bold>Variant count</Text>
                                        <H0 ellipsis>{variantCount}</H0>
                                    </Box>
                                </div>
                                <div className="col-md-4">
                                    <Box style={{ maxWidth: '400px' }} backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                                        <Text bold>Inventory count</Text>
                                        <H0 ellipsis>{inventoryCount}</H0>
                                    </Box>
                                </div>
                                <div className="col-md-4">
                                    <Box style={{ maxWidth: '400px' }} backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                                        <Text bold>Inventory value</Text>
                                        <H0 ellipsis>${inventoryValue}</H0>
                                    </Box>
                                </div>
                            </div>
                        </Box>
                    </GridItem>
                </Grid>
            </>
        );
    }
}