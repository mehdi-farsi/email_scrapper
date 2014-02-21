json.array!(@checkouts) do |checkout|
  json.extract! checkout, :id, :name, :email
  json.url checkout_url(checkout, format: :json)
end
