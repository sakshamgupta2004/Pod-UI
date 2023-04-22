const displayValues = (displayData) => {
    document.getElementById('bms_voltage').innerText = displayData[0];
    document.getElementById('bms_current').innerText = displayData[1];
    document.getElementById('bms_avg_cell_voltage').innerText = displayData[2];
    document.getElementById('bms_max_cell_voltage').innerText = displayData[3];
    document.getElementById('bms_min_cell_voltage').innerText = displayData[4];
    document.getElementById('bms_avg_cell_temp').innerText = displayData[5];
    document.getElementById('bms_max_cell_temp').innerText = displayData[6];
    document.getElementById('bms_min_cell_temp').innerText = displayData[7];
    document.getElementById('bms_cls_batt').innerText = displayData[8];
    document.getElementById('bms_electronics_batt').innerText = displayData[9];

    
    document.getElementById('prop_status').innerText = displayData[10];
    document.getElementById('prop_voltage').innerText = displayData[11];
    document.getElementById('prop_current').innerText = displayData[12];

    
    document.getElementById('cls_dist1').innerText = displayData[13];
    document.getElementById('cls_dist2').innerText = displayData[14];

    
    document.getElementById('braking_1').innerText = displayData[15];
    document.getElementById('braking_2').innerText = displayData[16];

    
    document.getElementById('temp1').innerText = displayData[17];
    document.getElementById('temp2').innerText = displayData[18];
    document.getElementById('temp3').innerText = displayData[19];
};