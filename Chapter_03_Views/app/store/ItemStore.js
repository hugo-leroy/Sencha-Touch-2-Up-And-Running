Ext.define('Chapter3Views.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Button', screen: 'buttondemo', category: 'Components' },
            { text: 'Label', screen: 'labeldemo', category: 'Components' },
            { text: 'Horizontal Carousel', screen: 'hcarouseldemo', category: 'Containers'  },
            { text: 'Vertical Carousel', screen: 'vcarouseldemo', category: 'Containers'  },
            { text: 'Segmented Button', screen: 'segmentedbuttondemo', category: 'Containers'  },
            { text: 'Tab Panel', screen: 'tabpaneldemo', category: 'Containers'  },
            { text: 'Title and Tool Bars', screen: 'titletoolbardemo', category: 'Containers'  },
            { text: 'Panel', screen: 'paneldemo', category: 'Panels'  },
            { text: 'Message Boxes', screen: 'messageboxdemo', category: 'Panels'  },
            { text: 'Sheet', screen: 'sheetdemo', category: 'Panels'  },
            { text: 'Action Sheet', screen: 'actionsheetdemo', category: 'Panels' },
            { text: 'Picker', screen: 'pickerdemo', category: 'Panels'  },
            { text: 'Image', screen: 'imagedemo', category: 'Multimedia' },
            { text: 'Maps', screen: 'mapdemo', category: 'Multimedia' },
            { text: 'Audio', screen: 'audiodemo', category: 'Multimedia' },
            { text: 'Video', screen: 'videodemo', category: 'Multimedia' },
            { text: 'Charts', screen: 'chartsdemo', category: 'Multimedia' }
        ],
        grouper: 'category'
    }
});

