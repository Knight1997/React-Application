import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// const URL =
//   "https://images-na.ssl-images-amazon.com/images/I/71c%2B9N5FvoL._SY450_.jpg";
function Items() {
  const urlList = [
    "https://images-na.ssl-images-amazon.com/images/I/71c%2B9N5FvoL._SY450_.jpg",
    "data:image/webp;base64,UklGRvYSAABXRUJQVlA4IOoSAABQdACdASosASwBPrFSn0qkIrMlpNIbMmgWCelu4W5xHddAgBvI80P5qfcxIwzc4CL/O0dwR8Kfst7AXCn+q+wT/OP7p6Jegb6x9hb9hfTf9jH7p+yf+wha3az9trP22s/baz9qtNBtSrkL1aiOpJd0H4tB/bbceu5SsaL+QFUnVanjmpxhDyJmxN8dgyUPTpA1Pji8sLtZsXnQxTcsfeeNsr/kRxSePUhfsFsiKC3WNkbNwdFmJUWk5k+ksV6Hk26SPvh4MbWL82y5ZSBIm46j1c4UvlMMGsMCzkxCYqUjORjdFVpGmuZiHMju/KMEpea+X9u4p8aVYMBmHIn7/kbUPPJZxS4IEyVcMiAHecnNR0cJkR3u5TgBSKXYmSWbSx/ayC2inz4Ish5VfcONx38H/InIl9viHa4JDr7z4GCOR2/dloJ7/s/E5u0WXH+Lam9EGAP1ONdacZdrP22EvPvLRKXHQ1OXm8PeQZKvDp+sGOJ40LuHKfbKvhT9KD74KtOKYv+HqWCyA851ySqRgWKOUX2PFpgYObTKWZymJhIJgv4mdl1JT7uli8Y5CQ8KCDeI59vlEPXoOwIYHbaJtNfdz12K4KqlEAPgJGPVT2qouhmguPKRWCMAOWLF9SXGywB/hEp2fTEyr0QLV9PhbH3Z1NlyHw/LZIk09Cf/rwaVF+eQELGK6WsbZLZDMaUzx+9+wNU7cDv9tnEP2VPfpKmbMRi3alc49XfQi7hAyIgquQBhUAQ1Y+bZTQX+4IBrP2s80S2nUkbix+PyGybop2GkweFcuYVTaPaHfTtRsPQgQ6bDCDp27sZyQ7PZqXa79xLmVhAvVbm7jVoKMmlOAdmqZunZj6LE2zQEfYu+FdKjKyaNzyxGciFXMabcpPLrL1On4on29AuasIf/xDJqEXWF2J0l7M6Ah1KDhWV25QiC1HPwmSvH5aZlJZa6KrL/Tsg5OWwSWUlWE+zBxqHTcBKqDeDmjLf3ZY1F1Pg/zxrvLx/HtwsMCW28t+DXqmrtv8+cCPIj5yRmDliaB9h60cJvCe+TwofOzc393UF+GE4vsd8+Q9jzBvW+cUIdIq2kzwMVU1LhBq45hAlXCyBr1WBS4G/MjmriYKPcc1lmJDjM0m7t+jZhQ7OqfcdNZmrmzvAbUZTGl2RCwqmzN19I9wHBb+vH4IbwCZpjMbWftm++lX2HNjeSi8Xj6DiGzcU02bPL2zj8rP8e95CxrfzcZY0X+2+Veh5V6HlXggAA/v6AoAWOH4+qYfX9k4aGWZYJ/ipzCVIgzMPEz/89vYzzXo2GKWF6RnyFBjCDkSxAwWxjSaRPjg7WkcPENLJjVC2szBG+GO3x9yvy5kff2MqTDrfnZ30o1nSeFrQYGaA9KpL6oFRtGxbsUiAFoVImBv5kthID+pPzy/KhQoCdW4JDfvJlJuy0DYrB7A+W/iPuO9VIsg3SqtG5bX50fwZ7GZgD5cljEP4jIl567NtllcGwJ8ulPPVvEvBMTNZSjFz+6dnsejNDHVd4/Bab2cpnAMUR6WXLdVVqnss41u+YRP8Uw30VTtv92OhJEoZmgt5eZ9mTD37TlN+g741IKUTjaZDBj+jDqFQX8KdweGt5R3lYNytt5tsi5hClkZUQ1/L2dySQFqHPMYMwHB5i63aZPxJZlu+yjAmBmzRvhab7Q4JCo1HE0gLFtbSQ7K23rziPy5Iq2gttcrGxADo1mU7zgJyNAVuK+DkRsdZS6evYRlCeSoiiRRCiM48CNyM+17I5/sO51llnujUlFbYS4BKpD/thNZg90EajxwD4HgG9URYtTHSYouJhHngiTw9lw8vhHxYEdluN2iiZPLokccmK3Mps+dLPgkQl/Ih6s/W5UCsqEjCYv2Cv8lZEG8+8SYPw4WNFerJTJqyLG8h6EhZRa/aEWghUuf/mucK292T9Txyve3rnCC5t2ZtAppaQt0s3nF8lVMlmoTEHW/3TIvpWqIO192vnmd/LDUblxOuOGyBzUGXvain8Txg8m7UfKsRIIY2VHJE343zitLf2TYA4+CGpqDIswbEPhJuDL86X2sa2w4CNFYY3rhDmtpcc7qXezvY+yuLkmevw36NXT1u2ELaaPRM9Cfai/5ozvpAbNr5VptPWLv6zI3TB819Du+BOAVK9sOHQebke+kmSU9GimN5qw6yTun452vzKFTgsfkBvuo0LuVWDTimx8fSIhvCUp4GKI88dDWCQmcfTaupXxyHyZzOvOA9lCWfJHIoMbZ5ipu1jc4ZLmqDhIwTh/TtBReNfY3eF6q0fEaTOCNBhIoetz3ZuvWlLSt7NhJX9IYFH0RQzkt8ztZ4SjkWtON7HP8MgEqmZ2LULxe/bwmPBM5jQb8FWsWSzPUU6chkigj2NJpkopK7zxPh91CxYg6RSD2MoVfSi9iZWQbM+br+Nk2snwRKsMHhWEcaW42zgsh+69NeHMFXUXmxLejydtw0mQgrqs0/4uRZ/OETn5eun/UJfZfLBalYWUCw6RyqbmEfStbg2vEdgUe+LQ5JI8pZfFZdWAMek8dhzmAxjCrfMM4ugevemmm7lNpc6Rs+pyFw8OI+VyM7zUzfNuyAvmXwCQ8VW3Vfz5pd68pauvMHR3+NScjJkVDynLjjuuTvv3qp4/2HxNL1AVBgje6moGBlZKyKOPdqy4bktu22UNQO3RE6DYQmpOQWbVqf0UNzhh/1flaZsSa0CQZvVR9aE9xg8f0o4qAu/o21iryt2+Z9hB5AuxBFZwgAnPCs+9j2RuExiLw54io0O5Fjml4armDu+sbQ/gcqocJvcSWQlfCvvlVQ048kzTspHNCdlElb3WRlAX0xGMLAQC3dyVCk05PK4VUC6XZoq0kOLuA3CxKJuLaG5OjImD6+CEJ7260FzJeGz5gfMqV2GWt9o66yd0d/Rgp2KSlmaWjvUrazgO6M1Shxt4AAqdDM0mffew8FSD7eNAFukfLt7WWQpMx8Gc7soiHBP3GEBzuRH8Rz9N02y5lAmuxrfvoNrprDD6WOl6DsLJ0yZag8GOurpYJcUY0oxF95wrmBx+lq+UIBvcrmLP8SzykWHPGyNsizrK91xGbZdZ5M2PWVp8E62s4rheGh5xUGhF5QzDnit/xK4HLIm7n+5KMJfnijeeO7zIa5n0oJF1lfqbZnFd6ySJ6Bj2vXrDBoAMf/f/XK2yOgTi8TOtxWTrczaY7GeBPA11N3khef5e9JI8LlehnwX3saA/0Xay+ninVzbKtyd3GvtLSm74Y69VDsgg7k1igIfHubQ6++8Rsca8tX/mgvj6gmxVIXaQZC58eJHR6bkO7Ix4XCo2TBuZrwihND41wu27m3OhLrWlUAy60m8MU/3GomL+0E+rKu1pxDRh2mq0AhyFsHwhpL/RFqNKcM5Lmr4+XlV+n4UCwfqdDwVQlYRifeqUcC+AGOTaGc/oHzZNTrJJPno9geUVXaBozF9xCKVsPo/9QUl0MNCX6rbeKgtnkg/6U2Z/tug05IP32mG5RMBNLdwLdVLfOK7dJJxPJQvQzclGz054X5B5ZlZuBsdONtZc9R29rM6s/pTvl+BH0XbR8tAiWdY7wXjlPFy5x/nq1S5RDz6ZlURtFUVi6hNs8E+6MesLYj2yfz40YAKbZb+AEO0znMmJY0qGUKv6B6csfur5FdY+mC1//nW9lKtL+8gUboBvD3ZClHNGqZihqbFSnM0IivQcCF7pH4BtY0gQyZ+CJlYSfA/ai5wr9J9FdYoC73LPWkyKwdt7gxDNfvOKcT0TqQc+YENa2RcOaP8CPSLq5V92uZKFTVnd5wdodKRCDdmVmDWh6PSsorbYgJba2fSf8zhqNCF9W2AEeGPPu/1t5iS4g6VX3dmXpw+nnXm+E38u9WVmVD86XzMXPJQUcW4sfVeVdTe9E2oTYraYM3pEVwaV8c74tPLIPHcZWn/imb37ZSD1jlPMW4YmiBZbHHq0dRV2uRRE8ykUpA3uD8CQ0UiQxvJaj4NgYIbVUknF6rcbNpiKZq/TBPVsxhq9bqs298YF79s3EH+L5ClyeYV6ePwvlkY4tANLLJpT5aQ0tK1JHfGWWDrtolG49b3ANz7ga+R7WpbCvcXhU+glAGi+vHtVnSg0EbfiNynV2B+nIrnMUFft44wjHuAJiAVEOzEYeJAeJXX+o2c41Yf1l2DK87IrWto+hH5l0brvwT+NzRbNMEdVHo+6y6plTwKl4vgiVdPZWL7L4Pi6gTppNY34AREG/ld8wdU/R5emGoiSKiV6+lYjAG1mq7QdTK8E9y1m32xCeoR2cjSJEFVs0UgrW9v/kk/GZUrx/JLcSayMHg9ZuDRRbQZkno64TsEjPXTTplATCILyqT9CXsOeG3iVKg55xTM+NPb6wQerL0IjapGZIQWEf7zr6Z9C8xFHlIonYWpOoAiP49B8hVFPkPUWkVZDfqYf4Rnadlg0jlcykzd5gXOdw6wceUnyxoIIqKhYaCu+pMrJuAW9RBvCln7vfr1jaQJbZ2CB2DLLU8tWaKX/ACpf/zPz3cvK6p1cVpAHihX6OolUqf4JDkntVjB3pp2LfI2ktmGUV5bZF7sHb8cmMd1RvC7PrkbhEdIuCY1TT83FzfwZrMRGLS66P21ApxyT93mZPZLBRiwo3m/n0nerKw8xoCt3xI6oZy1A1FoZPawQM8Iu0jY9g+5zUkM5zIPHFViPqBvHj0OGnLAW2XqirbTRcjl6plH0tF9bPyrCqUEbXIJ907eKPZXkOQkp+ilOO1bqsigt1CpgQHylLfF3qVNZgl7YjC0UDUNJkDhagVKAyVtTF8dsMuKr2AieR7jVzzH3GfVGP+e03NjK3Wvn1ucJxECw92rwfK+OTlTh6bMO+0ndGVvVTHqLUGTrwb+DU7eozxKPuDCHX9U9I0cSKmfhCwwwA1K39O7rA8DZjo/VsxPPnWJMyeSlwc6QRaN3BUPtRIOuk9NxqxAw+1TnshVQMOc8R6zpG3Fy92SBTZq9sbMYPSrU5IefMMYXpy9p3XxF3veC8DKkTGAiHJbHIT+xiuGZ85vNy03Ljz4o+mwzLRREXdHdOpTDURtbOoIMZ/7IURU2MxqbQ41dqxc95c4LjXWdLUD8lrGpMnxL0eteMiVZ/bDOIf5fY19GhNoq4GJ4oRNe7+TEezO4KLzlW9zZzP8ch408QZJVDzB735Fveiqd6jhStLEK5uChSYPBBnFAehzTa/Ev/uB8H4rGkkPvuqLhFLKBlZhS/fpZi8emD0dbEMLqMJaXFpcdzvo+36qmM89dx6RfBVPIR65BX5fYPKPnDTF9/SkLT5C6FmAUMCIlL/dN6xanl7sv7DKTOas+rVUtUqcwx/0GM5Af073YM9I0Bja8KsL8fnx8o4nQMv3VwuwC2G2vuzTtOOVxNJwFhz8Q+6ys0ih9aevsFi4YaMjy7mf/fvi4ku2/iDaD8S/h+zoBeHJD+e/hNPLgfmeEL3tdu0G5y1KwPqPt8UTuDm5aZdEZ7KrdZfr3Ve2JAY37FGj7QPwK7GnMaMasr0eiTy1wAAGt6rjJveomqXtjGBVglShbGiazL+0u2aH1LyyjbJt7Q9oYxOPZFNwlJbIhCvznG75+xLnR5quASok8Ue8PMWFR6ozfVDUIliUL8ReJIcljweA5VWKORrdZ3C/GDnOPr+CTeEKrFprN/5GoN9hYx+LI2u5DQRlXW9zhgYiYblevlztTTXeh1ljLPz61h5+UZ9jNbJRSq52OsRX1yZHdif8pOFsRjixad+1JRtmhTAYFUIgrMVjdpa/0P0tNYBPW1MFKuf2sxXqC51frBv+TyjQARBK4j3IME7litvuF0POgkDBFqNNq73NcHBW8JQ5ZVroEnOKdpt93tCD4AJjEPo3udfx0W8rFPe8nlIHH8MiuiEHAyi4BIrKgjFDsNeN2zlLxmY+gTtJEcbzwmSteKPDDmSpEx62Yns2zEHAJWxKeUGBldwLGGfvrjhlaDTRC3nV9bWdHgeZXiGfCRQ0yq+INQhSmREt6KSS8NPXjRpg8e1tDT4LwkR7daO9kKLgEL6iBgFBu4mkE2/NRPxd2tgOHAPnteN/Et3suxBKMgWJUhK2aCiYBlnl+Fgxq8+VhyHLERlQESuwnssTlbUUqxwNfsjicnP3ypQc/r8ExUllxh7iBIBmAeAJntb7mXgZDeZgVk5v4Y3bnF0aDm5jn9A8iqpAuemfW1ttHK07bdtuFqZrpJ36EbSPdaZYlpamseBFC6FJigzCGGFJowDZBIB9t8/XjcPrN3NBAbHcvpWNK268gPPR9hwFovCHdFSa9JHQnUAM9ZuNJ87JVx9V/efFhRxwPxKgDGyh2TkYz3Tsa99QRKDZPhjYVJAfUZp3hDR31EAGLxxfjWFaEkVmu88rKZPMlx49UNanpSZvu7g0wb6WzLEC7spr9LGAGpc4yTtValGP2xRzAzW4mGuu0pyASAAAAAA=",
    "data:image/webp;base64,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"
  ];
  const itemNameList = ["HP Laptop", "Boat AirPods", "JBL Earphones"];
  const itemPrice = ["27,000", "1,999", "599"];
  return (
    <section className="ItemsClass">
      <Item
        imgUrl={urlList[0]}
        itemName={itemNameList[0]}
        itemPrice={itemPrice[0]}
      />
      <Item
        imgUrl={urlList[1]}
        itemName={itemNameList[1]}
        itemPrice={itemPrice[1]}
      />
      <Item
        imgUrl={urlList[2]}
        itemName={itemNameList[2]}
        itemPrice={itemPrice[2]}
      />
      <Item
        imgUrl={urlList[2]}
        itemName={itemNameList[2]}
        itemPrice={itemPrice[2]}
      />
      <Item
        imgUrl={urlList[0]}
        itemName={itemNameList[0]}
        itemPrice={itemPrice[0]}
      />
    </section>
  );
}

const Item = props => (
  <div className="ItemClass">
    <ItemPicture url={props.imgUrl} altName={props.itemName} />
    <ItemPrice price={props.itemPrice} />
    <ItemButton />
  </div>
);
const ItemPicture = props => (
  <img src={props.url} alt={props.altName} width="200" />
);
const ItemPrice = props => <h3 id="ItemPrice">Price: Rs {props.price}</h3>;
const ItemButton = () => (
  <button width="400" id="ItemButton">
    Buy Now
  </button>
);
ReactDOM.render(<Items />, document.getElementById("root"));
