import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Box, H1, Text, Link, Table } from '@bigcommerce/big-design';
export default class ReactGrid extends React.Component<any> {

    constructor(props) {
        super(props)
        // this.state ={
        //     data:this.props.data,
        //     currentPage: '1',
        //     itemsPerPageOptions:[5, 10, 20, 30],
        //     itemsPerPage:'5',
        //     currentItems:'',
        // }
    }

    // componentDidMount(){
    //     const maxItems = this.state['currentPage'] * this.state['itemsPerPage']; 
    //     const lastItem = Math.min(maxItems, this.state['data'].orderTableData.length);
    //     const firstItem = Math.max(0, maxItems - this.state['itemsPerPage']);
    //     console.log('maxItems', maxItems);
    //     console.log('lastItem', lastItem);
    //     console.log('firstItem', firstItem);
    // }

    // onItemsPerPageChange = () => {
    //  const  maxItems = this.state['currentPage'] * this.state['itemsPerPage']; 
    //  console.log('maxItems', maxItems)
    // }

    // useEffect(() => {
    //     const maxItems = currentPage * itemsPerPage;
    //     const lastItem = Math.min(maxItems, orderTableData.length);
    //     const firstItem = Math.max(0, maxItems - itemsPerPage);

    //     setCurrentItems(orderTableData.slice(firstItem, lastItem));
    // }, [currentPage, itemsPerPage]);

    render() {
        console.log()
        const { orderData, orderTableData } = this.props.data;
        console.log('orderTableData====>', orderTableData);
        let totalOrder = orderData.length;
        // const [currentPage, setCurrentPage] = useState(1);
        // const [itemsPerPageOptions] = useState([5, 10, 20, 30]);
        // const [itemsPerPage, setItemsPerPage] = useState(5);
        // const [currentItems, setCurrentItems] = useState<any[]>([]);

        // const onItemsPerPageChange = (newRange) => {
        //     setCurrentPage(1);
        //     setItemsPerPage(newRange);
        // };

        return (
            <>
                <Grid>
                    <GridItem>
                        <Box backgroundColor="white" border="box" borderRadius="normal" padding="medium">

                            <div className="row">
                                <div className="col-md-10">
                                    <H1>Orders</H1>
                                    <Text>{totalOrder} Orders</Text>
                                </div>
                            </div>

                            <Table
                                columns={[
                                    { header: 'Order ID', hash: 'orderId', render: ({ orderId }) => orderId },
                                    { header: 'Billing Name', hash: 'billingName', render: ({ billingName }) => billingName },
                                    { header: 'Order Total', hash: 'orderTotal', render: ({ orderTotal }) => orderTotal },
                                    { header: 'Order Status', hash: 'orderStatus', render: ({ orderStatus }) => orderStatus },
                                    { header: 'Actions', hash: 'actions', render: ({ actions }) => actions },
                                ]}
                                items={orderTableData}
                                // pagination={{
                                //     currentPage,
                                //     totalItems: orderTableData.length,
                                //     onPageChange: setCurrentPage,
                                //     itemsPerPageOptions,
                                //     onItemsPerPageChange,
                                //     itemsPerPage,
                                // }}
                                stickyHeader
                            />
                        </Box>
                    </GridItem>
                </Grid>
            </>
        );
    }
}