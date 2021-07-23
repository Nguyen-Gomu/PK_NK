import React from 'react';
import Glab from './form';
import './Info.css'

function ConsignmentTerm() {
    return (
        <div className="consignment__container">
            <div className="consignment__info">
                <h3>CONSIGNMENT TERM</h3>
               <p className="row">
               <span class="consignment__title">Hàng hóa ký gửi cho PK-GOMU phải đáp ứng đầy đủ các điều kiện sau:</span><br/>
                <span class="consignment__content">
                    + Tất cả đều phải là hàng Authentic.<br/>
                    + Có tình trạng sản phẩm thấp nhất là 95%(sản phẩm có giá trị sưu tầm).<br/>
                    + Phù hợp với danh mục sản phẩm mục tiêu của PK-GOMU.<br/>
                </span>
               </p>
               <p className="row">
               <span class="consignment__title">Khi có nhu cầu ký gửi, các bạn làm theo các bước sau:</span><br/>
                <span class="consignment__content">
                    + Liên hệ trước qua fanpage hoặc mang sản phẩm trực tiếp đến PK-GOMU để xác định các điều kiện về sản phẩm.<br/>
                    + Chúng tôi sẽ tư vấn giá bán hợp lý và thống nhất cùng với bạn, sau đó sẽ lưu lại trên sổ ký gửi và phiếu ký gửi của PK-GOMU. Chúng tôi có quyền từ chối nhận sản phẩm ký gửi khi không thống nhất được giá hợp lý hoặc sản phẩm không nằm trong danh mục hàng hoá mục tiêu của PK-GOMU.<br/>
                    + PK-GOMU sẽ có trách nhiệm bán hàng tại cửa hàng và online trong vòng 60 ngày.<br/>
                    + Khi hàng bán được, PK-GOMU sẽ thu phí 10% giá trị hàng bán. Sau 3 ngày nếu như không có đổi trả hàng, PK-GOMU sẽ liên lạc với bạn để nhận phần tiền còn lại.<br/>
                    + Sau 60 ngày, trong trường hợp sản phẩm chưa bán được, chúng tôi sẽ liên hệ với bạn để tiến hành gia hạn việc ký gửi hoặc ngưng ký gửi. Trong cả 2 trường hợp, bạn sẽ không phải tốn bất kỳ chi phí nào.<br/>
                </span>
               </p>
                <p className="row">
                    <span class="consignment__title">Các quy định khác:</span><br/>
                    <span class="consignment__content">
                    Phiếu ký gửi: chủ hàng (CH) phải có trách nhiệm bảo quản phiếu ký gửi của PK-GOMU để có thể nhận được tiền hoặc nhận lại hàng.<br/>
                    Ngưng ký gửi: trong trường hợp CH quyết định ngưng ký gửi trước thời hạn 60 ngày, CH phải đóng khoản tiền 100.000VND/01 sản phẩm.<br/>
                    Bảo quản sản phẩm: PK-GOMU có trách nhiệm bảo quản và bán sản phẩm trong vòng 60 ngày kể từ ngày ký gởi, tình trạng của sản phẩm sẽ được ghi trên tag giá của sản phẩm, và ngoài việc cho khách hàng thử khi mua, chúng tôi sẽ không sử dụng sản phẩm dưới bất kỳ hình thức nào khác.<br/>
                    PK-GOMU không chịu trách nhiệm đối với những sản phẩm ký gửi có nguồn gốc bất hợp pháp.
                    </span>
                </p>
            </div>
            <Glab/>
        </div>
    );
}

export default ConsignmentTerm;