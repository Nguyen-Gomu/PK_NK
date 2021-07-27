import React,{useEffect,useState} from 'react';
import Glab from './form';
import './Info.css'

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin: 0 auto;
  background-color:#f6f6f6;
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
`;

function FAQs() {
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },1000)
    },[])
    return (
        <div>
          {loading 
            ? 
          <BeatLoader
            className="loading"
            color={"#000"} 
            loading={loading} 
            css={override} 
            size={15} 
            margin={2}
          /> :(

        <div className="consignment__container">
            <div className="consignment__info">
                <h3>FAQ</h3>
               <p className="row">
               <span class="consignment__title">Lịch sử ra đời và phát triển của PK-GOMU?</span><br/>
                <span class="consignment__content">
                    Thành lập vào năm 2014, với mục tiêu đem đến các sản phẩm chất lượng từ góc nhìn của những người sáng lập Cộng Đồng THẦN KINH GIÀY VIỆT NAM, PK-GOMU thông qua DỊCH VỤ KÝ GỬI đặc biệt đã mở rộng và phát triển thành một nền tảng để kết nối người bán và người mua ở lĩnh vực thời trang.<br/>
                    Với định vị độc đáo nằm ở cả Thị Trường Bán Lẻ (Retail Market) và Thị Trường Bán Lại (Resale Market), giờ đây tại PK-GOMU, các sản phẩm được bán không chỉ từ khách hàng, mà còn từ những nhà bán lẻ ở các thương hiệu trong và ngoài nước.<br/>
                    </span>
               </p>
               <p className="row">
               <span class="consignment__title">Làm sao để tôi bán sản phẩm của mình ở PK-GOMU?</span><br/>
                <span class="consignment__content">
                    Ở thời điểm hiện tại, để bán sản phẩm của bạn ở PK-GOMU, bạn phải liên hệ trước với chúng tôi thông qua các kênh liên lạc, hoặc mang sản phẩm trực tiếp đến cửa hàng để được xác định các điều kiện về sản phẩm. <br/>
                    Sau khi các điều kiện về sản phẩm được thông qua bạn sẽ có được hợp đồng ký gởi sản phẩm tại PK-GOMU.<br/>
                </span>
               </p>
                <p className="row">
                    <span class="consignment__title">Điều kiện để sản phẩm được bán ở PK-GOMU ?</span><br/>
                    <span class="consignment__content">
                        Không giống với việc bạn tự đăng lên mạng và bán một sản phẩm, các sản phẩm được ký gửi và bán tại PK-GOMU phải đảm bảo rất nhiều yếu tố như:<br/>
                        . Phù hợp với danh mục sản phẩm mục tiêu của PK-GOMU.<br/>
                        . Tất cả đều phải là hàng Authentic.<br/>
                        . Có tình trạng sản phẩm thấp nhất là 95%. <br/>
                        Các sản phẩm có giá trị sưu tầm sẽ được quyết định tùy trường hợp.<br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Quy trình sơ bộ của hoạt động KÝ GỬI và bán sản phẩm tại PK-GOMU?</span><br/>
                    <span class="consignment__content">
                        . Khi các điều kiện về sản phẩm được thông qua, PK-GOMU sẽ tư vấn giá bán hợp lý và thống nhất cùng bạn về các điều khoản trong hợp đồng hợp đồng ký gửi sản phẩm.<br/>
                        . PK-GOMU sẽ có trách nhiệm bán hàng của bạn tại cửa hàng vật lý và cửa hàng online trong vòng 60 ngày.<br/>
                        . Khi hàng bán được, PK-GOMU sẽ thu phí 10% giá trị hàng bán. Sau 3 ngày nếu như không có đổi trả hàng, PK-GOMU sẽ liên lạc với bạn để thanh toán phần tiền còn lại.<br/>
                        . Sau 60 ngày, trong trường hợp sản phẩm chưa bán được, chúng tôi sẽ liên hệ với bạn để tiến hành gia hạn việc ký gửi hoặc ngưng ký gửi. Trong cả 2 trường hợp, bạn sẽ không phải tốn bất kỳ chi phí nào.<br/>
                      <br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Tại sao các sản phẩm cùng loại lại có giá khác nhau?</span><br/>
                    <span class="consignment__content">
                        Các sản phẩm bán ở PK-GOMU sẽ có giá được quyết định bởi khách hàng có nhu cầu bán và ký gửi.<br/> 
                        PK-GOMU sẽ tư vấn về giá cả thị trường để việc bán sản phẩm có giá hợp lý. <br/>
                        Tuy vậy, mỗi khách hàng có quyền lựa chọn giá khác nhau. <br/>
                        Đối với các sản phẩm cùng loại và cùng tình trạng, sản phẩm có giá thấp nhất sẽ được hiển thị và bán trước.<br/>
                      <br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Nếu như mua các sản phẩm đã qua sử dụng, tôi có được xem hình thực tế của sản phẩm?</span><br/>
                    <span class="consignment__content">
                        Có, chắc chắn có, trước khi tiến hành việc thanh toán và giao hàng những sản phẩm đã qua sử dụng tại PK-GOMU, đội ngũ bán hàng sẽ liên lạc trực tiếp với bạn để gởi hình ảnh thật của sản phẩm tại thời điểm liên lạc.
                    </span><br/>
                    <span class="consignment__content">
                      <br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Nếu như phát hiện sản phẩm không AUTHENTIC (không phải hàng thật), tôi có được trả lại sản phẩm?</span><br/>
                    <span class="consignment__content">
                            Với uy tín thiết lập từ năm 2014 và với suy nghĩ đặt lợi ích của bạn lên hàng đầu, PK-GOMU sẽ luôn nhanh chóng giải quyết các thắc mắc của bạn về chất lượng sản phẩm. Bạn luôn có thể trả lại sản phẩm nếu như chứng minh sản phẩm mua từ PK-GOMU không phải là hàng thật (hàng AUTHENTIC)
                      <br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Quy trình thanh toán, giao nhận hàng khi tôi mua sản phẩm tại website GLAB.VN</span><br/>
                    <span class="consignment__content">
                        Sau khi thực hiện các bước mua hàng trên web và nhận được email xác nhận, đội ngũ bán hàng của PK-GOMU sẽ liên hệ trực tiếp với bạn lần nữa để đối chiếu các thông tin về thanh toán và địa chỉ giao hàng. Mọi sản phẩm đều được giao hàng từ kho hàng của PK-GOMU.
                      <br/>
                    </span>
                </p>
                <p className="row">
                    <span class="consignment__title">Liên hệ đội ngũ bán hàng của PK-GOMU ở đâu?</span><br/>
                    <span class="consignment__content">
                        Bạn luôn có thể trò chuyện với chúng tôi trực tiếp tại website hoặc thông qua các kênh liên lạc sau đây:<br/>
                        Số điện thoạ    i của PK-GOMU:+84945378809
                      <br/>
                    </span>
                </p>
            </div>
            <Glab/>
        </div>
          )}
          </div>
    );
}

export default FAQs;